from django.http import HttpRequest, HttpResponse
from django.shortcuts import render

def index(request: HttpRequest):
    return render(request, "index.html")

def sync(request: HttpRequest):
    return HttpResponse("Synco de mayo!");
