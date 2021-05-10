import multiselectfield
from django.contrib.auth import authenticate
from rest_framework import serializers, fields
from .models import User, Reader, Blogger, CHOICES


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'is_reader', 'is_blogger')


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)

        if user and user.is_active:
            return user
        raise serializers.ValidationError('Incorrect Credentials')

    def to_representation(self, instance):
        return UserSerializer(instance).data


class RegisterUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'email')

        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

    def create(self, validated_data):
        is_blogger = self.context.data.get('is_blogger', False)
        is_reader = self.context.data.get('is_reader', False)

        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password'],
        )

        if is_reader:
            Reader.objects.create(
                user=user,
                interests=self.context.data.get('interests'),
                is_adult=self.context.data.get('is_adult')
            )
            user.is_reader = True

        if is_blogger:
            Blogger.objects.create(
                user=user,
                birthday=self.context.data.get('birthday'),
                country=self.context.data.get('country'),
                categories=self.context.data.get('categories')
            )
            user.is_blogger = True

        user.save()

        return user

    def to_representation(self, instance):
        return UserSerializer(instance).data


class BloggerSerializer(serializers.ModelSerializer):
    categories = fields.MultipleChoiceField(choices=CHOICES)

    class Meta:
        model = Blogger
        fields = ('birthday', 'country', 'categories')


class ReaderSerializer(serializers.ModelSerializer):
    interests = fields.MultipleChoiceField(choices=CHOICES)

    class Meta:
        model = Reader
        fields = ('is_adult', 'interests')


# Gets user profile
class RetrieveUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'is_blogger', 'is_reader')

    def to_representation(self, instance):
        _instance = super().to_representation(instance)

        extra_data = {}

        if instance.is_blogger:
            extra_data.update(BloggerSerializer(instance.blogger).data)
        if instance.is_reader:
            extra_data.update(ReaderSerializer(instance.reader).data)

        _instance.update(extra_data)
        return _instance

    def update(self, instance, validated_data):
        instance = super().update(instance, validated_data)

        if instance.is_blogger:
            blogger = BloggerSerializer(instance.blogger, data=self.context['request'].data, partial=True)
            blogger.is_valid(raise_exception=True)

            instance.blogger = blogger.save()

        if instance.is_reader:
            reader = ReaderSerializer(instance.reader, data=self.context['request'].data, partial=True)
            reader.is_valid(raise_exception=True)
            instance.reader = reader.save()

        instance.save()
        return instance

class ChangeUserPasswordSerializer(serializers.Serializer):
    old_password = serializers.CharField(required=True)
    new_password = serializers.CharField(required=True)

    def validate(self, data):
        user = self.context['user']

        if not user.check_password(data["old_password"]):
            raise serializers.ValidationError('Incorrect password')

        if data["old_password"] == data["new_password"]:
            raise serializers.ValidationError('Passwords must not match')

        return data


class ResetUserPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate(self, data):
        user = User.objects.filter(email=data['email'])
        if user:
            return data
        raise serializers.ValidationError('User with such email does not exist')


class ResetUserPasswordChangeSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('password',)

    def update(self, instance, validated_data):
        instance.set_password(validated_data['password'])
        instance.save()
        return instance
