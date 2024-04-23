# This is an auto-generated Django model module.

# You'll have to do the following manually to clean this up:

#   * Rearrange models' order

#   * Make sure each model has one field with primary_key=True

#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior

#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table

# Feel free to rename the models, but don't rename db_table values or field names.

from django.db import models

class MyappTodo(models.Model):

    question = models.CharField(max_length=200)

    option1 = models.CharField(max_length=200)

    option2 = models.CharField(max_length=200)

    option3 = models.CharField(max_length=200)

    option4 = models.CharField(max_length=200)

    c_answer = models.IntegerField()

    topic = models.CharField(max_length=200)

    date_created = models.DateTimeField()



    class Meta:

        managed = False

        db_table = 'todo'

