from django.http import HttpResponseNotFound
from django.shortcuts import render

menu = [{'title': 'Главная', 'url_name': 'home'},
        {'title': 'Карта', 'url_name': 'vdnh_map'},
        {'title': 'О сайте', 'url_name': 'about'},
        {'title': 'Войти', 'url_name': 'login'},
        ]

def index(request):
    context = {
        'menu': menu,
        'title': 'Пострение маршрута'
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
