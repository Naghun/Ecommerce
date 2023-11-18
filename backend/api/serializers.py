from rest_framework import serializers
from .models import Product
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
    
        token['username'] = user.username

        return token