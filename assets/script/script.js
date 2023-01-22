//Global Variables
let submit = document.querySelector('#city_search');
let cities = {}
let coords = {}
let weather = document.getElementById('weather');

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
    for(let i=0; i < cities[state].length; i++){
      // console.log(i);
      if(city == cities[state][i]['name']){
        coords = cities[state][i]['coord'];
        console.log(cities[state][i]);
        console.log(coords);
        if(document.getElementById('error')){
          document.getElementById('error').remove();
        }
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

// test();
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