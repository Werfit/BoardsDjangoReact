from rest_framework import permissions


class BloggerPermission(permissions.BasePermission):
    def has_permission(self, request, view):
        if (request.user.is_authenticated and request.user.is_blogger) or request.method in permissions.SAFE_METHODS:
            return True
        return False
