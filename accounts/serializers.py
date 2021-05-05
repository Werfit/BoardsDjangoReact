from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


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
        fields = ('id', 'username', 'password')

        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'], '', validated_data['password'])
        return user

    def to_representation(self, instance):
        return UserSerializer(instance).data


class RetrieveUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')


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
