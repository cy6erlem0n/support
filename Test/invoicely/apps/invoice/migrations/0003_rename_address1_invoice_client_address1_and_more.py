# Generated by Django 5.0.6 on 2024-08-16 15:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('invoice', '0002_item'),
    ]

    operations = [
        migrations.RenameField(
            model_name='invoice',
            old_name='address1',
            new_name='client_address1',
        ),
        migrations.RenameField(
            model_name='invoice',
            old_name='address2',
            new_name='client_address2',
        ),
        migrations.RenameField(
            model_name='invoice',
            old_name='contact_person',
            new_name='client_contact_person',
        ),
        migrations.RenameField(
            model_name='invoice',
            old_name='contact_reference',
            new_name='client_contact_reference',
        ),
        migrations.RenameField(
            model_name='invoice',
            old_name='country',
            new_name='client_country',
        ),
        migrations.RenameField(
            model_name='invoice',
            old_name='name',
            new_name='client_name',
        ),
        migrations.RenameField(
            model_name='invoice',
            old_name='org_number',
            new_name='client_org_number',
        ),
        migrations.RenameField(
            model_name='invoice',
            old_name='place',
            new_name='client_place',
        ),
        migrations.RenameField(
            model_name='invoice',
            old_name='zipcode',
            new_name='client_zipcode',
        ),
        migrations.RemoveField(
            model_name='invoice',
            name='email',
        ),
        migrations.AddField(
            model_name='invoice',
            name='client_email',
            field=models.EmailField(default=0, max_length=255),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='invoice',
            name='invoice_type',
            field=models.CharField(choices=[('invoice', 'Invoice'), ('credit_note', 'Credit_note')], default='invoice', max_length=20),
        ),
    ]
