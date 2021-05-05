from rest_framework import permissions


class NotAuthenticated(permissions.BasePermission):
    def has_permission(self, request, view):
        if not request.user.is_authenticated:
            return True
        return False
