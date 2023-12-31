# Generated by Django 4.2.2 on 2023-10-17 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=50)),
                ('price', models.FloatField(default=0)),
                ('characteristics', models.TextField(default='Karakteristike nisu unešene', max_length=1000)),
                ('avalible', models.IntegerField(default=0)),
                ('picture', models.ImageField(blank=True, default='', null=True, upload_to='')),
            ],
        ),
    ]
