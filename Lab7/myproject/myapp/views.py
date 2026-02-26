from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("ICT 12367 SPU")

def about(request):
    return HttpResponse("<h1>About me</h1>")

def form(request):
    return render(request, 'form.html')

def contact(request):
    return HttpResponse("<h1>68069789 wuttipat panphuang</h1>")
