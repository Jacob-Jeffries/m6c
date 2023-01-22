import json

#Golly I forgot I was using python and the pwd is different!
with open("/mnt/d/bootcamp/lessons/m6c/data/cityList.json") as data:
  cityList = json.load(data)

print(type(cityList))
print(cityList[0]["country"])
print(cityList[1]["country"])
print(cityList[2]["country"])
print(cityList[3]["country"])
print(cityList[4]["country"])
