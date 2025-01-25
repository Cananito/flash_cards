from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, "index.html")

def sync(request):
    return HttpResponse("Synco de mayo!");
