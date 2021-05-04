from django.urls import path
from . import views

urlpatterns = [
    path('user/', views.UserRetrieveAPIView.as_view()),
    path('login/', views.login_user),
    path('register/', views.register_user),
    path('logout/', views.logout_user),
    path('settings/profile/', views.retrieve_user),
    path('settings/password/', views.change_user_password),
    path('password-reset/', views.reset_password),
    path('password-reset/<uidb64>/<token>/', views.reset_password_check_token),
    path('password-reset/complete/', views.reset_password_change)
]
