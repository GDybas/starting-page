const date = new Date();

function getDate() {
  let currentDay = date.getDate();
  let currentMonth = date.getMonth();
  let currentYear = date.getFullYear();

  currentDay = (currentDay < 10 ? "0" : "") + currentDay;
  currentMonth = (currentMonth < 10 ? "0" : "") + currentMonth;
  currentYear = (currentYear < 10 ? "0" : "") + currentYear;

  currentDate = `${currentDay} : ${currentMonth} : ${currentYear}`;

  document.querySelector(".main__date-msg").innerHTML = currentDate;
}

function getTime() {
  let currentHour = date.getHours();
  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();

  currentHour = (currentHour < 10 ? "0" : "") + currentHour;
  currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
  currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

  currentTime = `${currentHour} : ${currentMinutes} : ${currentSeconds}`;
}

// const interval = setInterval(getTime, 1000);

fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data .55);
  });