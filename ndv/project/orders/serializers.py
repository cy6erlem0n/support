from rest_framework.serializers import ModelSerializer
from .models import SalesOrder

class OrderSerialaizer(ModelSerializer):
    class Meta:
        model = SalesOrder
        fields = ['amount', 'description']