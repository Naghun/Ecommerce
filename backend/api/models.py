from django.db import models

class Product(models.Model):
    id=models.AutoField(primary_key=True)
    name=models.CharField(max_length=50, blank=False, null=False)
    price=models.FloatField(default=0)
    characteristics = models.TextField(default='Karakteristike nisu unešene', max_length=1000)
    avalible = models.IntegerField(default=0)
    picture = models.ImageField(default='', blank=True, null=True)

    def __str__(self):
        return self.name

