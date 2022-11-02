from django import forms
import json

class myForm(forms.Form):
    jsonfield = forms.CharField(max_length=1024)


def clean_jsonfield(self):
    jdata = self.cleaned_data['jsonfield']
    try:
        json_data = json.loads(jdata)  # loads string as json
        # validate json_data
    except:
        raise forms.ValidationError("Invalid data in jsonfield")
    # if json data not valid:
    # raise forms.ValidationError("Invalid data in jsonfield")
    return jdata