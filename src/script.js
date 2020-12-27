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

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city-text");
  cityElement.innerHTML = ``;
  let cityInput = document.querySelector("#search-text-input");
  cityElement.innerHTML = cityInput.value;
  let city = cityInput.value;
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

function showTemperature(response) {
    console.log(response.data);
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature-text"); 
    temperatureElement.innerHTML = `${temperature}`;            
}

// Feature 2
let searchForm = document.querySelector("#weather-form");
searchForm.addEventListener("submit", search);

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

function current() {
  
}
navigator.geolocation.getCurrentPosition(showPosition);

function showPosition(position) {
    console.log(position.coords.longitude);
    console.log(position.coords.latitude);
    let latitude = Math.round(position.coords.longitude);
    let longitude = Math.round(position.coords.latitude);
    console.log(latitude);
    console.log(longitude);
    let units = `metric`;
    let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&units=${units}`;
    console.log(apiUrl);

    axios.get(`${apiUrl}&appid=${apiKey}`).then(showCurrentTemperature);
}

function showCurrentTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature-text"); 
  temperatureElement.innerHTML = `${temperature}`;            
}
  

// My own extra feature 2
let currentForm = document.querySelector("#weather-form");
currentForm.addEventListener("click", current);




 