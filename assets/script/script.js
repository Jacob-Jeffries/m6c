//Global Variables
let submit = document.querySelector('#city_search');
let cities = {}
let coords = {}
let weather = document.getElementById('weather');
let openWeather_key = "f81b385c2879bb45d6dbb69918ce28b7";

//Load city JSON
function init() {
  fetch('./data/UScities.json')
  .then(function(response){
    return response.json();
  })
  .then(function(data) {
    cities = data;

  });

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    let city = document.querySelector('#inputCity').value.trim();
    let state = document.querySelector('#inputState').value.slice(0,2);

    console.log('Serach City: ', city)
    console.log('Search State: ', state)
    console.log('Number of cities in', state, cities[state].length);

    searchLocation(city, state, cities);
  });

  function searchLocation(city, state, cities) {
    if(document.getElementById('error')){
      document.getElementById('error').remove();
    }
    for(let i=0; i < cities[state].length; i++){
      // console.log(i);
      if(city == cities[state][i]['name']){
        coords = cities[state][i]['coord'];
        console.log(cities[state][i]);
        console.log(coords);
        console.log(coords['lat']);
        currentWeather(coords);
        forecast(coords);
        return;
      }
    };
    locationError();
  };
};

init();

function locationError(){
  let error = document.createElement("p");
  error.setAttribute("id", "error");
  error.innerText = "The city and state that you entered did not return any results. Please check your spelling and try again. Remember to use proper capitalization.";
  weather.appendChild(error);
}

function currentWeather(coords){
  let lat = coords['lat'];
  let lon = coords['lon'];
  let url = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid='+openWeather_key;
  
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
    displayWeather(data, "Current");
  });
};

function forecast(coords){
  let lat = coords['lat'];
  let lon = coords['lon'];
  let url = 'https://api.openweathermap.org/data/2.5/forecast?lat='+lat+'&lon='+lon+'&appid='+openWeather_key;
  
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
    displayWeather(data, "Forecast");
  });
};

function displayWeather(weather, call){
  console.log(call);
  console.log(weather);
};