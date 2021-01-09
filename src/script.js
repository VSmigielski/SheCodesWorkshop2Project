function formatDate(timestamp) {
let date = new Date(timestamp);

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
return `${day} ${formatHours(timestamp)}`;
}

function formatDayMonth(currentDay) {
  let date = currentDay.getDate();
  let month = currentDay.getMonth();
  let monthNumber = month + 1;
  return `${date}/${monthNumber}`;
}

function formatHours(timestamp) {
let date = new Date(timestamp);
let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature-text");
  let cityElement = document.querySelector("#city-text");
  let descriptionElement = document.querySelector("#description");
  let dateElement = document.querySelector("#day-time-text")
  let iconElement = document.querySelector("#icon");  
   
  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature); 
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;     
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt", response.data.weather[0].description);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);

  let currentDay = new Date();
  let yearDay = document.querySelector("#day-month-text");
  yearDay.innerHTML = formatDayMonth(currentDay);
}

function displayForecast(response) {
  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = null;
  let forecast = null;

  for (let index = 0; index < 6; index++) {
    forecast = response.data.list[index];
    forecastElement.innerHTML += `
    <div class="col-2">
      ${formatHours(forecast.dt * 1000)}
        <br />
          <p class="days">
            <img
              src="http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png"
                                    />
                                </p>
                                <br />
                                ${Math.round(forecast.main.temp_max)}° | ${Math.round(forecast.main.temp_min)}° 
                              </div>
                              `;
  }
}

function search(city) {
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#search-text-input");
  search(cityInputElement.value);
}

function updateCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-text");
  // add the active class to celsius link
  celsiusLink.classList.add("active");
  // remove the active class from fahrenheit link
  fahrenheitLink.classList.remove("active");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
}

function updateFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature-text");
  // remove the active class from celsius link
  celsiusLink.classList.remove("active");
  // add the active class to fahrenheit link
  fahrenheitLink.classList.add("active");
  let fahrenheitTemperature = (celsiusTemperature * 9) /5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

function searchLocation(position) {
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function updateParis(event) {
  event.preventDefault();
  let city = "Paris";
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function updateAmsterdam(event) {
  event.preventDefault();
  let city = "Amsterdam";
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function updateNewYork(event) {
  event.preventDefault();
  let city = "New York";
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

function updateTokyo(event) {
  event.preventDefault();
  let city = "Tokyo";
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
  ${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemperature);

  apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);
}

let form = document.querySelector("#weather-form");
form.addEventListener("submit", handleSubmit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", updateCelsius);

let celsiusTemperature = null;

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", updateFahrenheit);

let currentLocationButton = document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);

let parisLink = document.querySelector("#paris-text");
parisLink.addEventListener("click", updateParis);


let amsterdamLink = document.querySelector("#amsterdam-text");
amsterdamLink.addEventListener("click", updateAmsterdam);

let newyorkLink = document.querySelector("#newyork-text");
newyorkLink.addEventListener("click", updateNewYork);

let tokyoLink = document.querySelector("#tokyo-text");
tokyoLink.addEventListener("click", updateTokyo);

search("New York");

/* This retrieves the day and month by incrementing the initial date 
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



 Paid version to get a 5 day forecast that makes the timestamp work
 function getFiveDayForecast(response) {
   let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
   let cnt = 5;
   let city = document.querySelector("#search-text-input").value;
   let apiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${apiKey}`;
   axios.get(apiUrl).then(showCurrentTemperature);
   console.log(response.data);
 }
*/