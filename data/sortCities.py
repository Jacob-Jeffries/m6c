import json

us_cities = []

sorted_cities = {
  'AL':[],
  'AK':[],
  'AR':[],
  'AZ':[],
  'CA':[],
  'CO':[],
  'CT':[],
  'DC':[],
  'DE':[],
  'FL':[],
  'GA':[],
  'HI':[],
  'IA':[],
  'ID':[],
  'IL':[],
  'IN':[],
  'KS':[],
  'KY':[],
  'LA':[],
  'MA':[],
  'MD':[],
  'ME':[],
  'MI':[],
  'MN':[],
  'MO':[],
  'MS':[],
  'MT':[],
  'NC':[],
  'ND':[],
  'NE':[],
  'NH':[],
  'NJ':[],
  'NM':[],
  'NV':[],
  'NY':[],
  'OH':[],
  'OR':[],
  'PA':[],
  'RI':[],
  'SC':[],
  'SD':[],
  'TN':[],
  'TX':[],
  'UT':[],
  'VA':[],
  'WI':[],
  'WV':[],
  'WY':[]}

#Golly I forgot I was using python and the pwd is different!
with open("/mnt/d/bootcamp/lessons/m6c/data/cityList.json") as data:
  cityList = json.load(data)

for a in cityList:
  if a['country'] == 'US':
    us_cities.append(a)

for b in sorted_cities:
  for c in us_cities:
    if c['state'] == b:
      sorted_cities[b].append(c)

for d in sorted_cities:
  print(d, len(sorted_cities[d]))
  print(sorted_cities[d][0])

for e in sorted_cities:
  sorted_cities[e].sort(key=lambda x: x['name'])

for d in sorted_cities:
  print(d, len(sorted_cities[d]))
  print(sorted_cities[d][0])

json_object = json.dumps(sorted_cities, indent=2)

json_file = open("UScities.json", "w")
json_file.write(json_object)
json_file.close()