from django.db import models
from django.contrib.auth.models import AbstractUser
from multiselectfield import MultiSelectField

CHOICES = (
    (1, 'programming'),
    (2, 'food'),
    (3, 'beauty'),
    (4, 'sports')
)


class User(AbstractUser):
    is_reader = models.BooleanField(default=False)
    is_blogger = models.BooleanField(default=False)


class Blogger(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    birthday = models.DateField(blank=True, null=True)
    country = models.CharField(max_length=20, blank=True, null=True)
    categories = MultiSelectField(choices=CHOICES, blank=True, null=True)

    def __str__(self):
        return self.user.username


class Reader(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    interests = MultiSelectField(choices=CHOICES, blank=True, null=True)
    is_adult = models.BooleanField(default=False, blank=True, null=True)

    def __str__(self):
        return self.user.username
