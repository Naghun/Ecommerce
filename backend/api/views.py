from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import Token
from .models import Product
from .serializers import ProductSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .serializers import MyTokenObtainPairSerializer


class ItemsView(APIView):
    model=Product

    def get(self, request):
        data=Product.objects.all()
        serializers = ProductSerializer(data, many=True)
        return Response(serializers.data)
    
    @classmethod
    def get_extra_actions(cls):
        return []
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
    @classmethod
    def get_token(cls, user) -> Token:
        token = super().get_token(user)
    
        token['username'] = user.username

        return token