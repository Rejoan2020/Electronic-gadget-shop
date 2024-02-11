# from .products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.models import Product
from api.serializers import ProductSerializer

@api_view(['GET'])
def getProducts(request):
    query = request.query_params.get('query')
    if query == None:
        query = ''
    
    products = Product.objects.filter(name__icontains = query)
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product,many = False)
    return Response(serializer.data)