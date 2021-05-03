from django.contrib.auth.models import User
from django.utils import timezone

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Board, Topic, Post
from .serializers import BoardSerializer, TopicSerializer, PostSerializer


class BoardsViewSet(viewsets.ModelViewSet):
    queryset = Board.objects.all()
    serializer_class = BoardSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)


class TopicsViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all()
    serializer_class = TopicSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        return Topic.objects.filter(board=self.kwargs.get('board_pk')).order_by('-updated_at')

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        board = Board.objects.get(pk=kwargs.get('board_pk'))

        return Response({
            'topics': self.serializer_class(queryset, many=True).data,
            'board': board.name
        })

    def create(self, request, *args, **kwargs):
        data = request.data | {
            'board': kwargs.get('board_pk'),
            'starter': request.user.pk
        }

        topic = self.serializer_class(data=data, context={'message': request.data['message']})
        topic.is_valid(raise_exception=True)
        topic.save()

        return Response(topic.data)


class PostsViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        return Post.objects.filter(topic=self.kwargs.get('topic_pk'))

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        topic = Topic.objects.get(pk=kwargs.get('topic_pk'))

        return Response({
            'posts': self.serializer_class(queryset, many=True).data,
            'topic': topic.subject,
            'board': topic.board.name
        })

    def create(self, request, *args, **kwargs):
        data = request.data | {
            'topic': kwargs.get('topic_pk'),
            'created_by': request.user.pk
        }

        post = self.serializer_class(data=data)
        post.is_valid(raise_exception=True)
        post.save()

        topic = Topic.objects.get(pk=kwargs.get('topic_pk'))
        topic.updated_at = timezone.now()
        topic.save()

        return Response(post.data)
