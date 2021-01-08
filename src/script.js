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
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.weather[0].description;  
    let iconElement = document.querySelector("#icon");      
    iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
    iconElement.setAttribute("alt", response.data.weather[0].description);
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

function formatDayMonth(firstDate) {
  let date = firstDate.getDate();
  let month = firstDate.getMonth();
  let monthNumber = month + 1;
  return `${date}/${monthNumber}`;
  }
  
  let firstDate = new Date();
  let firstDay = document.querySelector("#first-date");
  firstDay.innerHTML = formatDayMonth(firstDate);

function formatDayMonth(secondDate) {
let date = secondDate.getDate();
let month = secondDate.getMonth();
let monthNumber = month + 1;
return `${date}/${monthNumber}`;
}

let secondDate = new Date();
secondDate.setDate(secondDate.getDate() + 1);
let secondDay = document.querySelector("#second-date");
secondDay.innerHTML = formatDayMonth(secondDate);

function formatDayMonth(thirdDate) {
  let date = thirdDate.getDate();
  let month = thirdDate.getMonth();
  let monthNumber = month + 1;
  return `${date}/${monthNumber}`;
  }
  
  let thirdDate = new Date();
  thirdDate.setDate(thirdDate.getDate() + 2);
  let thirdDay = document.querySelector("#third-date");
  thirdDay.innerHTML = formatDayMonth(thirdDate);

  function formatDayMonth(fourthDate) {
    let date = fourthDate.getDate();
    let month = fourthDate.getMonth();
    let monthNumber = month + 1;
    return `${date}/${monthNumber}`;
    }
    
    let fourthDate = new Date();
    fourthDate.setDate(fourthDate.getDate() + 3);
    let fourthDay = document.querySelector("#fourth-date");
    fourthDay.innerHTML = formatDayMonth(fourthDate);   

    function formatDayMonth(fifthDate) {
      let date = fifthDate.getDate();
      let month = fifthDate.getMonth();
      let monthNumber = month + 1;
      return `${date}/${monthNumber}`;
      }
      
      let fifthDate = new Date();
      fifthDate.setDate(fifthDate.getDate() + 4);
      let fifthDay = document.querySelector("#fifth-date");
      fifthDay.innerHTML = formatDayMonth(fifthDate);

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

function getFiveDayForecast(response) {
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let cnt = 5;
  let city = document.querySelector("#search-text-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${apiKey}`;
  axios.get(apiUrl).then(showCurrentTemperature);
  console.log(response.data);
}
