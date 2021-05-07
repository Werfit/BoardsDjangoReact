from rest_framework import serializers
from .models import Board, Topic, Post


class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Board
        fields = '__all__'

    def to_representation(self, instance):
        _instance = super().to_representation(instance)
        last_post = instance.get_last_post()

        extra_fields = {
            'posts': instance.get_posts_count(),
            'topics': instance.topics.count(),
            'last_post': None
        }

        if last_post:
            extra_fields['last_post'] = {
                'created_by': last_post.created_by.username,
                'created_at': last_post.created_at,
                'topic': last_post.topic.id
            }

        _instance.update(extra_fields)

        return _instance


class TopicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Topic
        fields = '__all__'

    def to_representation(self, instance):
        _instance = super().to_representation(instance)
        _instance.update({
            'board': instance.board.name,
            'starter': instance.starter.username,
            'replies': instance.posts.count()
        })
        return _instance

    def create(self, validated_data):
        topic = Topic.objects.create(
            subject=validated_data['subject'],
            board=validated_data['board'],
            starter=validated_data['starter']
        )

        Post.objects.create(
            message=self.context['request'].data['message'],
            created_by=validated_data['starter'],
            topic=topic
        )
        return topic


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = '__all__'

    def to_representation(self, instance):
        _instance = super().to_representation(instance)
        posts = Post.objects.filter(created_by=instance.created_by).count()

        extra_fields = {
            'topic': instance.topic.subject,
            'created_by': {
               'posts': posts,
               'username': instance.created_by.username
           }
        }

        _instance.update(extra_fields)
        return _instance
