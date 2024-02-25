# from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Product
from api.serializers import ProductSerializer

from rest_framework import viewsets
from api.paginations import ProductPagination


@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('query')
    if query == None:
        query = ''

    products = Product.objects.filter(name__icontains=query)
    serializer = ProductSerializer(products, many=True)

    pagination = ProductPagination()
    paginated_data = pagination.paginate_queryset(serializer.data, request)
    return pagination.get_paginated_response(paginated_data)

    # return Response(serializer.data)


@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)
