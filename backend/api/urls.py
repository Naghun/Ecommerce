from django.urls import path
from .views import ItemsView, MyTokenObtainPairView
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

router = DefaultRouter()
router.register(r'items', ItemsView, basename='items')

urlpatterns = [
    path('items/', ItemsView.as_view(), name='items'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
