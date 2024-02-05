from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    # path('', views.getRoutes),
    path('users/login', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/',views.getUsers,name = 'Users'),
    path('users/register/', views.registerUser,name = "registration"),
    path('products/',views.getProducts),
    path('users/profile/',views.getUserProfile),
    path('products/<str:pk>/',views.getProduct),
]
