from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.login_user),
    path('register/', views.register_user),
    path('logout/', views.logout_user),
    path('settings/profile/', views.retrieve_user),
    path('settings/password/', views.change_user_password),
    path('user/', views.UserRetrieveAPIView.as_view())
]
