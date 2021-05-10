# from django.contrib.auth.models import User
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import smart_str, smart_bytes, DjangoUnicodeDecodeError
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import RetrieveAPIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status

from . import serializers
from .models import User, Reader, Blogger
from .permissions import NotAuthenticated


@api_view(['POST'])
@permission_classes([NotAuthenticated])
def login_user(request):
    user_serializer = serializers.LoginUserSerializer(data=request.data)
    user_serializer.is_valid(raise_exception=True)

    token, _ = Token.objects.get_or_create(user=user_serializer.validated_data)

    return Response({
        'user': user_serializer.data,
        'token': token.key
    })


@api_view(['POST'])
@permission_classes([NotAuthenticated])
def register_user(request):
    user_serializer = serializers.RegisterUserSerializer(data=request.data, context=request)
    user_serializer.is_valid(raise_exception=True)
    user = user_serializer.save()

    token, _ = Token.objects.get_or_create(user=user)
    return Response({
        'user': user_serializer.data,
        'token': token.key
    })


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_user(request):
    token = Token.objects.get(key=request.headers['Authorization'].split()[1])
    token.delete()

    return Response({
        'detail': 'Logout success'
    })


# Gets & Updates User profile data: first name, last name, email etc.
@api_view(['GET', 'PATCH'])
@permission_classes([IsAuthenticated])
def retrieve_user(request):
    if request.method == 'GET':
        user = serializers.RetrieveUserSerializer(request.user)
        return Response(user.data)

    user = serializers.RetrieveUserSerializer(request.user, data=request.data, partial=True, context={'request': request})
    user.is_valid(raise_exception=True)
    user.save()

    return Response(user.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def change_user_password(request):
    user = request.user
    serializer = serializers.ChangeUserPasswordSerializer(
        data=request.data,
        context={'user': request.user}
    )

    serializer.is_valid(raise_exception=True)

    user.set_password(serializer.validated_data['new_password'])
    user.save()

    token, _ = Token.objects.get_or_create(user=user)
    return Response('Password successfully changed')


@api_view(['POST'])
@permission_classes([NotAuthenticated])
def reset_password(request):
    data = serializers.ResetUserPasswordSerializer(data=request.data)
    data.is_valid(raise_exception=True)

    user = User.objects.get(email=data.validated_data['email'])
    uidb64 = urlsafe_base64_encode(smart_bytes(user.id))
    token = PasswordResetTokenGenerator().make_token(user)

    mail_html = render_to_string('accounts/mail_template.html', {
        'email': data.validated_data['email'],
        'user': user,
        'uidb64': uidb64,
        'token': token,
        'protocol': 'http',
        'domain': 'localhost:8000'
    })
    plain_message = strip_tags(mail_html)

    send_mail(
        'Password reset',
        plain_message,
        's25112003@gmail.com',
        (data.validated_data['email'],)
    )

    return Response({
        'uidb64': uidb64,
        'token': token
    })


@api_view(['GET'])
@permission_classes([NotAuthenticated])
def reset_password_check_token(request, uidb64, token):
    try:
        id = smart_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(id=id)

        if not PasswordResetTokenGenerator().check_token(user, token):
            return Response({
                'error': 'Token is incorrect. Try again'
            }, status=status.HTTP_400_BAD_REQUEST)

        return Response({
            'user': serializers.UserSerializer(user).data
        }, status=status.HTTP_200_OK)
    except DjangoUnicodeDecodeError:
        return Response({
            'error': 'Token is invalid. Try again'
        }, status=status.HTTP_400_BAD_REQUEST)
    except User.DoesNotExist:
        return Response({
            'error': 'Token is invalid. Try again'
        }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([NotAuthenticated])
def reset_password_change(request):
    user = User.objects.get(id=request.data['id'])

    serializer = serializers.ResetUserPasswordChangeSerializer(user, request.data, partial=True)
    serializer.is_valid(raise_exception=True)
    serializer.save()

    return Response('Password successfully changed')


# Returns User name and id for authentication checks
class UserRetrieveAPIView(RetrieveAPIView):
    serializer_class = serializers.UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user
