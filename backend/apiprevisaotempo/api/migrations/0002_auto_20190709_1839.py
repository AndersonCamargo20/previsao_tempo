# Generated by Django 2.2.3 on 2019-07-09 21:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='registros',
            name='dataRegistrado',
        ),
        migrations.AddField(
            model_name='registros',
            name='humidade',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='registros',
            name='temperatura',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
