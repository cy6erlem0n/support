from django.shortcuts import render
from .models import SalesOrder
from rest_framework.viewsets import ModelViewSet
from .serializers import OrderSerialaizer


class OrderView(ModelViewSet):
    queryset = SalesOrder.objects.all()
    serializer_class = OrderSerialaizer

def orders_app(request):
    return render(request, 'main_app.html',)