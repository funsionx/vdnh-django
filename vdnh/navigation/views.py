from django.http import HttpResponseNotFound
from django.shortcuts import render
from .forms import *

menu = [{'title': 'Главная', 'url_name': 'home'},
        {'title': 'Карта', 'url_name': 'vdnh_map'},
        {'title': 'О сайте', 'url_name': 'about'},
        {'title': 'Войти', 'url_name': 'login'},
        ]

def index(request):
    form = myForm()
    if request.method == 'POST':
        form = myForm(request.POST)
        if form.is_valid():
            print(form.json_cleaned_data())
        else:
            form = myForm()
            print('GGWP')
    context = {
        'menu': menu,
        'title': 'Пострение маршрута',
        'form': form,
    }
    template = 'navigation/index.html'
    return render(request, template, context=context)

def show_map(request):
    ...

def about(request):
    ...

def login_user(request):
    ...

def pageNotFound(request, exception):
    return HttpResponseNotFound('Страница не найдена')
