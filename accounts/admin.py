from django.contrib import admin
from .models import User, Reader, Blogger

admin.site.register(User)
admin.site.register(Reader)
admin.site.register(Blogger)
