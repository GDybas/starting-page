// API KEY
const apiKey = '209c288b6edff8f1ba13eb49283b2207';
// KELVIN VALUE FOR CONVERSION TO CELSIUS
const KELVIN = 273;
// Variable for changing view
let stage = true;

//weather 
const weatherBox = document.querySelector('.weather-box');
const weatherSide = document.querySelector('.weather-side');

const weatherWeek = document.querySelector('.weather-week-box');
const changeIcon = document.querySelector('.change-view-icon');

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
const sunrise = document.querySelector(".sunrise-time");
const sunset = document.querySelector(".sunset-time");

//background
const bgImageBox = document.querySelector(".bg-image-container");



const weather = {
  temperature: {
    value: 2,
    unit: "celsius",
  },
  info: {
    humidity: 60,
    pressure: 1000,
    wind: 2,
  },
  description: "desc",
  iconId: "icon",
  city: "city",
  country: 'country',
  condition: 'condition',
  time: {
    sunrise: 1549312452,
    sunset: 1549312452,
  },
};

function displayWeather() {
  weatherImage.innerHTML = `<img src="./img/weather-icons/${weather.iconId}.png" alt="Weather Icon"/>`;
  weatherDesc.innerHTML = `${weather.description}`
  tempInfo.innerHTML = `${weather.temperature.value} &#176<span>C</span>`;
  city.innerHTML = `${weather.city}`;
  humidity.innerHTML = `<span class="weather-info__text"> ${weather.info.humidity}%</span>`;
  wind.innerHTML = `<span class="weather-info__text"> ${weather.info.wind} km/h</span>`;
  pressure.innerHTML = `<span class="weather-info__text"> ${weather.info.pressure} hPa</span>`;
}

function setSunTime() {
  const sunriseTime = new Date(weather.time.sunrise * 1000);
  const sunsetTime = new Date(weather.time.sunset * 1000);
  let sunriseHour = sunriseTime.getHours();
  let sunriseMinutes = sunriseTime.getMinutes();
  let sunsetHour = sunsetTime.getHours();
  let sunsetMinutes = sunsetTime.getMinutes();

  (sunriseHour < 10) ? sunriseHour = '0' + sunriseHour: '' + sunriseHour;
  (sunriseMinutes < 10) ? sunriseMinutes = '0' + sunriseMinutes: '' + sunriseMinutes;
  (sunsetHour < 10) ? sunsetHour = '0' + sunsetHour: '' + sunsetHour;
  (sunsetMinutes < 10) ? sunsetMinutes = '0' + sunsetMinutes: '' + sunsetMinutes;

  sunrise.innerHTML = `${sunriseHour}:${sunriseMinutes}`;
  sunset.innerHTML = `${sunsetHour}:${sunsetMinutes}`;
}

function setBackgroundImage(condition) {
  let bgImage;
  switch (condition) {
    case 'Clouds':
      bgImage = `url('./img/background-images/cloudy.jpg')`;
      break;
    case 'Drizzle':
      bgImage = `url('./img/background-images/rainy.jpg')`;
      break;
    case 'Clear':
      bgImage = `url('./img/background-images/sunny.jpg')`;
      break;
    case 'Mist':
      bgImage = `url('./img/background-images/mist.jpg')`;
      break;
    case 'Fog':
      bgImage = `url('./img/background-images/mist.jpg')`;
      break;
    case 'Snow':
      bgImage = `url('./img/background-images/snowy.jpg')`;
      break;
    case 'Rain':
      bgImage = `url('./img/background-images/rainy.jpg')`;
      break;
    case 'Thunderstorm':
      bgImage = `url('./img/background-images/stormy.jpg')`;
      break;
  }
  bgImageBox.style.backgroundImage = bgImage;
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
  let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

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
      weather.info.humidity = data.main.humidity;
      weather.info.pressure = data.main.pressure;
      weather.info.wind = Math.floor(data.wind.speed);
      weather.condition = data.weather[0].main;
      weather.time.sunrise = data.sys.sunrise;
      weather.time.sunset = data.sys.sunset;
      console.log(data);
    })
    .then(() => {
      displayWeather();
      setBackgroundImage(weather.condition);
      setSunTime();
    })
}

function changeWeatherView(e) {

  if (stage === true) {
    weatherBox.style.display = 'none';
    weatherSide.style.display = 'none';
    weatherWeek.style.display = 'block';
    // changeIcon.style.color = 'rgb(151, 255, 151);';
    console.log('first');
    stage = false;

  } else {
    console.log(weatherBox.style.display);
    weatherBox.style.display = 'block';
    weatherSide.style.display = 'flex';
    weatherWeek.style.display = 'none';
    // changeIcon.style.color = '#fff';
    console.log('second');
    stage = true;
  }
  e.preventDefault();
}