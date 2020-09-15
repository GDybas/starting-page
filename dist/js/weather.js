// API KEY
const apiKey = '209c288b6edff8f1ba13eb49283b2207';
// KELVIN VALUE FOR CONVERSION TO CELSIUS
const KELVIN = 273;

//background
const bgImage = document.querySelector(".bg-image");

//weather box
const weatherImage = document.querySelector(".weather-img");
const weatherDesc = document.querySelector(".weather-desc");
const tempInfo = document.querySelector(".temp-info");
const errorNotification = document.querySelector('.alert-box');

//city
const city = document.querySelector(".city");

//weather info
const humidity = document.querySelector(".humidity");
const precipitation = document.querySelector(".precipitation");
const wind = document.querySelector(".wind");
const pressure = document.querySelector(".pressure");
//Twilight Dawn info
const dawnTime = document.querySelector(".dawn-time");
const twilightTime = document.querySelector(".twilight-time");



const weather = {
  temperature: {
    value: 2,
    unit: "celsius",
  },

  description: "desc",
  iconId: "icon",
  city: "city",
  country: 'country'
};

function displayWeather() {
  weatherImage.innerHTML = `<img src="./img/weather-icons/${weather.iconId}.png" alt="Weather Icon"/>`;
  weatherDesc.innerHTML = `${weather.description}`
  tempInfo.innerHTML = `${weather.temperature.value} &#176<span>C</span>`;
  city.innerHTML = `${weather.city}`;
}

function tempUnitChange() {

  if (weather.temperature.value === undefined) return;
  if (weather.temperature.unit === 'celsius') {
    let fahrenheit = celsiusToFahrenheit(weather.temperature.value);
    fahrenheit = Math.floor(fahrenheit);
    tempInfo.innerHTML = `${fahrenheit}&#176 <span>F</span>`;

    weather.temperature.unit = "fahrenheit"

  } else {
    tempInfo.innerHTML = `${weather.temperature.value}&#176 <span>C</span>`;
    weather.temperature.unit = "celsius";
  }
}

//Temperature unit conversion function
function celsiusToFahrenheit(celsius) {
  let fahrenheitValue = celsius / 5 * 9 + 32;
  return fahrenheitValue;
}

// function fahrenheitToCelsius(fahrenheit) {
//   let celsiusValue = (fahrenheit - 32) * 5 / 9;
//   return celsiusValue;
// }

// CHECKING IF GEOLOCATION SERVICES ARE AVIABLE
if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
  errorNotification.style.display = 'block';
  errorNotification.innerHTML = `Geolocation Unavailable`
}

// Setting position

function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  getWeather(latitude, longitude);
}

function showError(error) {
  errorNotification.style.display = "block";
  errorNotification.innerHTML = `${error.message}`;
}

function getWeather(latitude, longitude) {
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=current,daily&appid=${apiKey}`;

  fetch(api).then(response => {
      let data = response.json();
      return data;
    })
    .then(data => {
      weather.temperature.value = Math.floor(data.main.temp - KELVIN);
      weather.description = data.weather[0].description;
      weather.iconId = data.weather[0].icon;
      weather.city = data.name;
      weather.country = data.sys.country;
      console.log(data);
    })
    .then(() => {
      displayWeather();
    })
}