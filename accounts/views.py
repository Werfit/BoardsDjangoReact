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


# Gets & Updates User profile data: first name, last name and email
@api_view(['GET', 'PATCH'])
@permission_classes([IsAuthenticated])
def retrieve_user(request):
    if request.method == 'GET':
        user = serializers.RetrieveUserSerializer(request.user)
        return Response(user.data)

    user = serializers.RetrieveUserSerializer(request.user, data=request.data, partial=True)
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


# Returns User name and id for authentication checks
class UserRetrieveAPIView(RetrieveAPIView):
    serializer_class = serializers.UserSerializer
    permission_classes = (IsAuthenticated,)

    def get_object(self):
        return self.request.user
