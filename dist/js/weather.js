//background
const bgImage = document.querySelector(".bg-image");

//weather box
const weatherImage = document.querySelector(".weather-img");
const tempInfo = document.querySelector(".temp-info");

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
    value: 27,
    unit: "celsius",
  },
  iconId: "sunny-icon",
  city: "Gorlice",
};

function displayWeather() {
  weatherImage.innerHTML = `<img class="weather-img" src="./img/weather-icons/iconId.png" alt="Weather Icon"/>`;
  tempInfo.innerHTML = `${weather.temperature.value}, &#176 <span>C</span>`;
  city.innerHTML = `${weather.city}`;
}

function tempUnitChange() {
  if (weather.temperature.unit === 'celsius') {
    weather.temperature.value = `(${weather.temperature.value}/5*9)+32`;
    weather.temperature.unit = 'fahrenheit'
  }
}