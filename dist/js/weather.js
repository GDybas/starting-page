//background
const bgImage = document.querySelector('.bg-image');

//weather box
const weatherImage = document.querySelector('.weather-img');
const tempInfo = document.querySelector('.temp-info');

//weather info
const humidity = document.querySelector('.humidity');
const precipitation = document.querySelector('.precipitation');
const wind = document.querySelector('.wind');
const pressure = document.querySelector('.pressure');

// bgImage.setAttribute('style', "background: url('../img/background-images/stormy.jpg') no-repeat center right / cover;");

const weather = {
  temperature: {
    value: 27,
    unit: "celsius"
  }
}