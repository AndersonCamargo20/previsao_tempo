# Generated by Django 2.2.3 on 2019-07-09 21:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20190709_1839'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registros',
            name='humidade',
        ),
        migrations.AddField(
            model_name='registros',
            name='umidade',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='registros',
            name='temperatura',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]