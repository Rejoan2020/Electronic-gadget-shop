from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL,null=True)
    name = models.CharField(blank=True, max_length=500)
    image = models.ImageField(null = True, blank = True)
    camera = models.CharField(max_length = 100, blank = True)
    processor = models.CharField(max_length = 100,blank =  True)
    display = models.TextField(max_length = 1000,blank = True)
    rating = models.CharField(max_length=50)
    features = models.TextField(null = True,blank = True,max_length = 100)
    numReviews = models.IntegerField(blank = True,null = True,default = 0)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    countStock = models.IntegerField(blank = True, null = True,default = 0)
    creation_date = models.DateTimeField(auto_now_add = True)
    _id = models.AutoField(primary_key=True)

    def __str__(self):
        dis = self.name
        return dis
    

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete = models.SET_NULL,null = True)
    user = models.ForeignKey(User,on_delete = models.SET_NULL, null = True)
    name = models.CharField(blank = True, null = True, max_length = 100)
    rating = models.IntegerField(default = 0,null = True,blank = True)
    comment = models.TextField(null = True,blank = True,max_length = 1000)
    # image = 
    _id = models.AutoField(primary_key=True)

    def __str__(self):
        return str(self.rating)

class Order(models.Model):
    _id = models.AutoField(primary_key=True)
    User = models.ForeignKey(User,on_delete = models.SET_NULL, null = True)
    paymentMethod = models.CharField(null = True,blank = True, max_length=50)
    delieveryCharge = models.DecimalField( max_digits=5, decimal_places=2)
    totalPrice = models.DecimalField(max_digits=9, decimal_places=2)
    isPaid = models.BooleanField(default = False)
    isDelivered = models.BooleanField(default = False)
    deliveredTime = models.DateTimeField(auto_now_add=True)
    orderedTime = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.orderedTime)
    


class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete = models.SET_NULL,null = True)
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(null = True,blank = True, max_length=50)
    quantity = models.IntegerField(default = 0)
    price = models.DecimalField( max_digits=8, decimal_places=2)
    image = models.ImageField(null = True, blank=True)
    _id = models.AutoField(primary_key=True)

    def __str__(self):
        return self.name


class ShippingAddress(models.Model):
    order = models.OneToOneField(Order,on_delete = models.CASCADE,null = False, blank = True)
    _id = models.AutoField(primary_key=True)
    shippingPrice = models.DecimalField(max_digits=6, decimal_places=2)
    address = models.TextField(max_length = 200)
    city = models.CharField(max_length = 50)
    postalcode = models.IntegerField(default = 1100)
    country = models.CharField(max_length = 50)

    def __str__(self):
        return self.address


