from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    is_reader = models.BooleanField(default=False)
    is_blogger = models.BooleanField(default=False)


class Blogger(models.Model):
    CATEGORIES_CHOICES = (
        (1, 'programming'),
        (2, 'food'),
        (3, 'beauty'),
        (4, 'sports')
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birthday = models.DateField()
    country = models.CharField(max_length=20)
    categories = models.PositiveSmallIntegerField(choices=CATEGORIES_CHOICES)

    def __str__(self):
        return self.user.username


class Reader(models.Model):
    INTERESTS_CHOICES = (
        (1, 'programming'),
        (2, 'food'),
        (3, 'beauty'),
        (4, 'sports')
    )

    user = models.OneToOneField(User, on_delete=models.CASCADE)
    interests = models.PositiveSmallIntegerField(choices=INTERESTS_CHOICES)
    is_adult = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username
