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
  'WY':[],
  'Z':[]}

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
    elif c['state'] == '':
      sorted_cities['Z'].append(c)

for d in sorted_cities:
  print(d, len(sorted_cities[d]))
  print(sorted_cities[d][0])