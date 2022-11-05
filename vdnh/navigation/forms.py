from django import forms
import json

from django.core.validators import MaxValueValidator, MinValueValidator


# -*- coding: utf-8 -*-
class myForm(forms.Form):
    date = forms.DateField(label = 'Выберите дату посещения', widget=forms.SelectDateWidget(attrs={'type':'date'}))
    elder_num = forms.IntegerField(label= 'Введите колличество взрослых',widget=forms.NumberInput(attrs={'type': 'number'}))
    teen_num = forms.IntegerField(label= 'Введите колличество подростков', widget=forms.NumberInput(attrs={'type': 'number'}))
    child_num = forms.IntegerField(label= 'Введите колличество детей' ,widget=forms.NumberInput(attrs={'type': 'number'}))
    arriving_time = forms.TimeField(label = 'Время начала прогулки', widget=forms.TimeInput(attrs={'type': 'time'}))
    exit_time = forms.TimeField(label = 'Время конца прогулки ', widget=forms.TimeInput(attrs={'type': 'time'}))
    places_to_visit = forms.MultipleChoiceField(label = 'Чего делать-то будем?', widget=forms.CheckboxSelectMultiple(attrs={'type':'checkbox'}),
                                               choices = [('workshop','В мастерскую!'), ('restaurant', 'Кушать хочу..'),
                                                           ('museum', 'А может в музей?'), ('Reading-room', 'В читальный зал!'),
                                                           ('pond', 'Посидеть на пруду:)'), ('playground', 'На спортплощадку!'),
                                                           ('wc', 'А туалет где?'), ('atm', 'Срочно нужно в банкомат')])
    pavilions = forms.MultipleChoiceField(label = 'А в павильоны пойдем?', widget=forms.CheckboxSelectMultiple(attrs={'type':'checkbox'}),
                                         choices=[('pavilion 1', 'Павильон 1'), ('pavilion 2', 'Павильон 2'), ('pavilion 3', 'Павильон 3')])

    def json_cleaned_data(self):
        """
        Преобразовывает значения формы в json файл
        :return: json_data.json
        """
        print(self.cleaned_data)
        print(type(self.cleaned_data))
        with open('json_data.json', 'w', encoding='UTF-8') as f:
            json.dump(self.cleaned_data, f, indent=4, sort_keys=True, default=str, ensure_ascii=False)