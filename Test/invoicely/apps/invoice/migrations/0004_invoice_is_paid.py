# Generated by Django 5.0.6 on 2024-08-16 15:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('invoice', '0003_rename_address1_invoice_client_address1_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='invoice',
            name='is_paid',
            field=models.BooleanField(default=False),
        ),
    ]
