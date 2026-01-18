from django.contrib import admin
from django.urls import path, include
from Home import views

admin.site.site_header = "Food Man Admin"
admin.site.site_title = "Food Man Admin Portal"
admin.site.index_title = "Welcome to Food Man"


urlpatterns = [
    path('', views.index, name='home'),
    path('menu', views.menu, name='menu'),
    path('contact', views.contact, name='contact'),
    path('about_us', views.about_us, name='about_us'),
    path('about', views.about, name='about'),
    path('ordered', views.ordered, name='ordered'),
    path('log_in', views.log_in, name='log_in'),
    path('liked_food', views.liked, name='liked'),
    path('pizza_sec', views.pizza_sec, name='pizza_sec'),
    path('burger_sec', views.burger_sec, name='burger_sec'),
    path('subway_sec', views.subway_sec, name='subway_sec'),
    path('roll_sec', views.roll_sec, name='roll_sec'),
    path('biryani_sec', views.biryani_sec, name='biryani_sec'),
    path('dosa_sec', views.dosa_sec, name='dosa_sec'),
    path('itli_sec', views.itli_sec, name='itli_sec'),
    path('cake_sec', views.cake_sec, name='cake_sec'),
    path('cold_drink_sec', views.cold_drink_sec, name='cold_drink_sec'),
    path('ice_cream_sec', views.ice_cream_sec, name='ice_cream_sec'),
    path('sweets_sec', views.sweets_sec, name='sweets_sec'),
    path('add', views.add, name='add'),
]
