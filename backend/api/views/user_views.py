# from .products import products
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated,IsAdminUser
from rest_framework.response import Response
from api.serializers import UserSerializer,UserSerializerWithToken
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    # print("log in reached")
    def validate(self, attrs):
        data = super().validate(attrs)
        # print(data)
        serializer = UserSerializerWithToken(self.user).data
        for dataa, val in serializer.items():
            data[dataa] = val 

        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        # print("try in")
        user = User.objects.create(
            first_name = data['name'],
            username = data['username'],
            password = data['password'],
            email = data['username'],
        )
        serializer = UserSerializerWithToken(user,many = False)
        # print("reg in")
        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists!'}
        return Response(message,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def updateUserProfile(request):
    user = request.user
    serializer = UserSerializerWithToken(user, many=False)
    data = request.data
    print(data)
    user.first_name = data['name']
    user.username = data['email']
    user.email = data['email'] 
    if data['password'] != '':
        user.set_password(data['password']) 
    user.save()
    
    return Response(serializer.data)

@api_view(['GET'])
@permission_classes([IsAdminUser]) 
def getUsers(request):
    print("in")
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)
