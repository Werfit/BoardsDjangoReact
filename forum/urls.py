from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()

router.register('', views.BoardsViewSet, basename='boards')
router.register(r'(?P<board_pk>[^/.]+)/topics', views.TopicsViewSet)
router.register(r'(?P<topic_pk>[^/.]+)/posts', views.PostsViewSet)

urlpatterns = router.urls

urlpatterns = [
    path('/', include(router.urls))
]
