function formatDate(date) {
let hours = date.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday", 
  "Monday", 
  "Tuesday", 
  "Wednesday", 
  "Thursday", 
  "Friday", 
  "Saturday"
];
let day = days[date.getDay()];

return `${day} ${hours}:${minutes}`;
}
// Feature 1
let dayTimeElement = document.querySelector("#day-time-text");
let currentTime = new Date();
dayTimeElement.innerHTML = formatDate(currentTime);

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  searchCity(city);
}

function searchCity(event) {
  event.preventDefault();
  let city = document.querySelector("#search-text-input").value;
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function showTemperature(response) {
    console.log(response.data);
    document.querySelector("#city-text").innerHTML = response.data.name;
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature-text"); 
    temperatureElement.innerHTML = `${temperature}`;           
}

// Feature 2
let searchForm = document.querySelector("#weather-form");
searchForm.addEventListener("submit", searchCity);

// Bonus feature
function updateCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-text");
  temperatureElement.innerHTML = 19;
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", updateCelsius);

function updateFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-text");
  temperatureElement.innerHTML = 66;
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", updateFahrenheit);

function formatDayMonth(currentDay) {
let date = currentDay.getDate();
let month = currentDay.getMonth();
let monthNumber = month + 1;
return `${date}/${monthNumber}`;
}
// My own extra feature 1
let currentDay = new Date();
let yearDay = document.querySelector("#day-month-text");
yearDay.innerHTML = formatDayMonth(currentDay);

function searchLocation(position) {
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}


function showCurrentTemperature(response) {
  console.log(response.data);          
}
  

// My own extra feature 2
let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

function updateParis(event) {
  event.preventDefault();
  let city = "Paris";
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let parisLink = document.querySelector("#paris-text");
parisLink.addEventListener("click", updateParis);

function updateAmsterdam(event) {
  event.preventDefault();
  let city = "Amsterdam";
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let amsterdamLink = document.querySelector("#amsterdam-text");
amsterdamLink.addEventListener("click", updateAmsterdam);
 
function updateNewYork(event) {
  event.preventDefault();
  let city = "New York";
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let newyorkLink = document.querySelector("#newyork-text");
newyorkLink.addEventListener("click", updateNewYork);

function updateTokyo(event) {
  event.preventDefault();
  let city = "Tokyo";
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let tokyoLink = document.querySelector("#tokyo-text");
tokyoLink.addEventListener("click", updateTokyo);

