from django.utils import timezone

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly, exceptions

from .models import Board, Topic, Post
from .serializers import BoardSerializer, TopicSerializer, PostSerializer
from .pagination import LargeResultsSetPagination, SmallResultsSetPagination
from .permissions import BloggerPermission


class BoardsViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    permission_classes = (IsAuthenticatedOrReadOnly, BloggerPermission)


class TopicsViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    pagination_class = LargeResultsSetPagination

    def get_queryset(self):
        return Topic.objects.filter(board=self.kwargs.get('board_pk')).order_by('-updated_at')

    def get_paginated_response(self, data, extra):
        return self.paginator.get_paginated_response(data, extra)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        board = Board.objects.get(pk=kwargs.get('board_pk'))

        page = self.paginate_queryset(queryset)
        extra = (('board', board.name),)
        return self.get_paginated_response(self.get_serializer(page, many=True).data, extra)

    def create(self, request, *args, **kwargs):
        data = request.data | {
            'board': kwargs.get('board_pk'),
            'starter': request.user.pk
        }

        topic = self.get_serializer(data=data)
        topic.is_valid(raise_exception=True)
        topic.save()

        return Response(topic.data)


class PostsViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)
    pagination_class = SmallResultsSetPagination

    def get_queryset(self):
        return Post.objects.filter(topic=self.kwargs.get('topic_pk'))

    def get_paginated_response(self, data, extra):
        return self.paginator.get_paginated_response(data, extra)

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())
        topic = Topic.objects.get(pk=kwargs.get('topic_pk'))

        page = self.paginate_queryset(queryset)
        extra = (
            ('topic', topic.subject),
            ('board', topic.board.name)
        )
        return self.get_paginated_response(self.get_serializer(page, many=True).data, extra)

    def create(self, request, *args, **kwargs):
        data = request.data | {
            'topic': kwargs.get('topic_pk'),
            'created_by': request.user.pk
        }

        post = self.get_serializer(data=data)
        post.is_valid(raise_exception=True)
        post.save()

        topic = Topic.objects.get(pk=kwargs.get('topic_pk'))
        topic.updated_at = timezone.now()
        topic.save()

        return Response(post.data)

    def retrieve(self, request, pk=None, *args, **kwargs):
        post = Post.objects.get(pk=pk)
        if post.created_by != request.user:
            raise exceptions.PermissionDenied('Not an author of the post')

        return Response({
            'post': post.message,
            'topic': post.topic.subject,
            'board': post.topic.board.name
        })

    def update(self, request, *args, **kwargs):
        post = Post.objects.get(pk=kwargs['pk'])
        if post.created_by != request.user:
            raise exceptions.PermissionDenied('Not an author of the post')

        kwargs['partial'] = True
        return super().update(request, *args, **kwargs)
