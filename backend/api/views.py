from django.shortcuts import render
from django.http import JsonResponse
from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def getRoutes(request):
    routes = [
        "api/products",
        "api/products/create",
        "api/products/upload",
        "api/products/<id>/reviews",
    ]
    return Response(routes);

@api_view(['GET'])
def getProducts(request):
    return Response(products)


@api_view(['GET'])
def getProduct(request,pk):
    for product in products:
        if product['_id']==pk:
            return Response(product)
    return Response(None)