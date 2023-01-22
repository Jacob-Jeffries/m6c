let city = document.querySelector('#inputCity');
let state = document.querySelector('#inputState');
let submit = document.querySelector('#city_search');

//Load city JSON
let cities = {}
fetch('./data/UScities.json')
.then(function(response){
  return response.json();
})
.then(function(data) {
  cities = data;
});

submit.addEventListener("click", function(event) {
  event.preventDefault();
  console.log(city)
  console.log(state)
});


function test(){
  fetch('./data/forcast.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    displayWeather(data);
  })
};

test();
// console.log(weather);

function displayWeather(weather){
  console.log(weather);
  console.log(weather.list[0].main.temp);
  console.log(weather.list[0].main.feels_like);
  console.log(weather.list[0].main.temp_min);
  console.log(weather.list[0].main.temp_max);
  console.log(weather.list[0].main.humidity);
  console.log(weather.list[0].weather[0].id);
  console.log(weather.list[0].weather[0].main);
  console.log(weather.list[0].weather[0].description);
  console.log(weather.list[0].clouds.all);
};