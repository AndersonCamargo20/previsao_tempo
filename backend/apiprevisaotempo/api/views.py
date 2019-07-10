from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from .models import *
from json import dumps, loads

def index(request):
    models = Registros.objects.all()
    models_list = []
    for model in models:
        models_list.append({
            "id": model.id,
            "cidade":model.cidade,
            "umidade":model.umidade,
            "temperatura":model.temperatura
        })
    return HttpResponse(dumps(models_list), content_type="application/json")

@csrf_exempt # !!!
def setModel(request):
    if(request.method == 'POST'):
        data = loads(request.body.decode('utf-8'))
        model = Registros()
        model.cidade = data["cidade"]
        model.temperatura = data["temperatura"]
        model.umidade = data["umidade"]
        model.save()
        return HttpResponse(request.POST.get("nome"))

    if(request.method == 'GET'):
        print(request.GET)
        return HttpResponse(request.method)

