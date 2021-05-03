from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.generics import RetrieveAPIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response

from . import serializers


@api_view(['POST'])
def login_user(request):
    user_serializer = serializers.LoginUserSerializer(data=request.data)
    user_serializer.is_valid(raise_exception=True)

    token, _ = Token.objects.get_or_create(user=user_serializer.validated_data)

    return Response({
        'user': user_serializer.data,
        'token': token.key
    })


@api_view(['POST'])
def register_user(request):
    user_serializer = serializers.RegisterUserSerializer(data=request.data)
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


class UserRetrieveAPIView(RetrieveAPIView):
    serializer_class = serializers.UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user
