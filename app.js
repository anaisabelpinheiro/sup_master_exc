let selected      = document.querySelector('.day__block--selected');
let days          = document.querySelectorAll('.day__block');
let temperature   = document.querySelector('.weather-temp--today');
let wind          = document.querySelector('#wind-speed');
let precipitation = document.querySelector('#precipitation-probality');
let description   = document.querySelector('#weather-description');
let place         = document.querySelector('#weather-location');
let icon          = document.querySelector('.weather__icon--today');

let temp_min = document.querySelectorAll('#day__block-temp day__block-temp--min');
let temp_max = document.querySelectorAll('#day__block-temp day__block-temp--max');


let root   = 'https://api.openweathermap.org';
let apiKey = '094c98f2466ee55acfdba0d40a1b1546';
let path   = 'data/2.5/weather';
let city   = 'Lisbon';


axios.get(root + '/' + path + '?q=' + city + '&appid=' + apiKey + '&units=metric')
  .then(function(response) {
console.log (response.data);
temperature.innerHTML = (response.data.main.temp);
precipitation.innerHTML = (response.data.main.humidity);
wind.innerHTML = (response.data.wind.speed);

});

let forecast   = 'data/2.5/forecast';

axios.get(root + '/' + forecast + '?q=' + city + '&appid=' + apiKey + '&units=metric')
  .then(function(response) {
console.log (response.data);
temp_min.innerHTML = (response.data.list.main.temp_min);
});



//console.log(weather);

//console.log (weather);

//console.log (weather.humidity);
//console.log (weather.temp);

//weather.windSpeed = 14;
//console.log(weather.windSpeed);
//console.log (weather['temp']);
//console.log (weather ['humidity']);





// function refreshTemp(event) {
//   todayTemp.innerHTML = event.currentTarget.getAttribute('max');
//   document.querySelector('.day__block--selected').classList.remove('day__block--selected');
//   event.currentTarget.classList.add('day__block--selected');

//   let iconPath = 'images/' + event.currentTarget.getAttribute('conditions') + '.png'
//   todayIcon.setAttribute('src', iconPath);
// };

// days.forEach(function(day, index) {
//   day.addEventListener('click', refreshTemp);
// });
