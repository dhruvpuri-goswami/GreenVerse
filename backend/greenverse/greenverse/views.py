from django.http import JsonResponse
import json

def hello(request):
    data_string = '{"name": "John", "age": 30, "city": "New York"}'
    
    data_dict = json.loads(data_string)
    
    return JsonResponse(data_dict)