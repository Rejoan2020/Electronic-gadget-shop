from django.urls import path
from api.views import user_views as views

urlpatterns = [
    # path('', views.getRoutes),
    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('',views.getUsers,name = 'Users'),
    path('register/', views.registerUser,name = "registration"),
    path('profile/',views.getUserProfile),
<<<<<<< HEAD
    path('profile/update/', views.updateUserProfile, name = 'update-profile'),
=======
>>>>>>> bb56c5d1445e0d26423df76b1c284e5d0e49067b
]
