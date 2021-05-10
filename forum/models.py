from django.db import models
from boards.settings import AUTH_USER_MODEL as USER


class Board(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    def get_posts_count(self):
        return Post.objects.filter(topic__board=self).count()

    def get_last_post(self):
        return Post.objects.filter(topic__board=self).order_by('-created_at').first()


class Topic(models.Model):
    subject = models.CharField(max_length=150)
    board = models.ForeignKey(Board, on_delete=models.CASCADE, related_name='topics')
    starter = models.ForeignKey(USER, on_delete=models.CASCADE)

    updated_at = models.DateTimeField(auto_now_add=True)
    views = models.PositiveIntegerField(default=0)

    def __str__(self):
        return self.subject


class Post(models.Model):
    message = models.TextField()
    topic = models.ForeignKey(Topic, on_delete=models.CASCADE, related_name='posts')
    created_by = models.ForeignKey(USER, on_delete=models.CASCADE)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.message
