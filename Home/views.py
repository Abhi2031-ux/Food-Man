from django.shortcuts import render, HttpResponse

# Todo: Create your views here.
def index(request):
    return render(request, 'index.html')
    # ? return HttpResponse("this is home page")
    
def menu(request):
    return render(request, 'menu.html')

def contact(request):
    return render(request, 'contact.html')

def about_us(request):
    return render(request, 'about_us.html')

def about(request):
    return render(request, 'about.html')

def ordered(request):
    return render(request, 'ordered.html')

def liked(request):
    return render(request, 'liked_food.html')

def log_in(request):
    return render(request, 'log_in.html')

def pizza_sec(request):
    return render(request, 'pizza_sec.html')

def burger_sec(request):
    return render(request, 'burger_sec.html')

def subway_sec(request):
    return render(request, 'subway_sec.html')

def roll_sec(request):
    return render(request, 'roll_sec.html')

def biryani_sec(request):
    return render(request, 'biryani_sec.html')

def dosa_sec(request):
    return render(request, 'dosa_sec.html')

def itli_sec(request):
    return render(request, 'itli_sec.html')

def cake_sec(request):
    return render(request, 'cake_sec.html')

def cold_drink_sec(request):
    return render(request, 'cold_drink_sec.html')    

def ice_cream_sec(request):
    return render(request, 'ice_cream_sec.html')
    
def sweets_sec(request):
    return render(request, 'sweets_sec.html')    

def add(request):
    return render(request, 'add.html')