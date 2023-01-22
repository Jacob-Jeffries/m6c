import json

us_cities = []

#Golly I forgot I was using python and the pwd is different!
with open("/mnt/d/bootcamp/lessons/m6c/data/cityList.json") as data:
  cityList = json.load(data)

print(type(cityList))
print(cityList[0])
print(cityList[0]["coord"])
print(cityList[0]["coord"]["lon"])
print(cityList[0]["coord"]["lat"])
print(cityList[3]["country"])
print(cityList[4]["country"])

for x in cityList:
  if x["country"] == "US":
    us_cities.append(x)

print(us_cities[0]["name"])
print(us_cities[1]["name"])
print(us_cities[2]["name"])
print(us_cities[3]["name"])
print(us_cities[4]["name"])

sorted_us_cities = sorted(us_cities, key=lambda X: X["name"])


print(sorted_us_cities[0]["name"], sorted_us_cities[0]["state"])
print(sorted_us_cities[1]["name"])
print(sorted_us_cities[2]["name"])
print(sorted_us_cities[3]["name"])
print(sorted_us_cities[4]["name"])

