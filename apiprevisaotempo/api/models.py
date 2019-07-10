from django.db import models

# Create your models here.

class Registros(models.Model):
    cidade=models.CharField(max_length=200)
    temperatura=models.CharField(max_length=10, null=True, blank=True)
    umidade=models.CharField(max_length=10, null=True, blank=True)

    def __str__(s):
        return s.cidade
