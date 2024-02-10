from django.urls import path
from api.views import user_views as views

urlpatterns = [
    # path('', views.getRoutes),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('',views.getUsers,name = 'Users'),
    path('register/', views.registerUser,name = "registration"),
    path('profile/',views.getUserProfile),
    path('profile/update/', views.updateUserProfile, name = 'update-profile'), 
]
