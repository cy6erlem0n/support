# Generated by Django 5.0.6 on 2024-08-19 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('invoice', '0006_invoice_bankaccount'),
    ]

    operations = [
        migrations.AddField(
            model_name='invoice',
            name='is_credited',
            field=models.BooleanField(default=False),
        ),
    ]