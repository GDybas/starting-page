const date = new Date();
const sec = date.getSeconds();
//
function getDate() {
  const dayNum = date.getDate();
  const monthNum = date.getMonth();
  const weekDayNum = date.getDay();

  const dateContainer = document.querySelector(".day-name");
  dateContainer.innerHTML = `${setDayName(weekDayNum)}, ${setMonthName(monthNum)}, ${dayNum}${setDaySuffix(dayNum)}`;
}


function getTime() {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  const clockContainer = document.querySelector(".clock");
  clockContainer.innerHTML = `${hour}:${minutes}`;
  console.log(sec);
}

function setDayName(dayNum) {
  let weekDay;
  switch (dayNum) {
    case 0:
      weekDay = "Sun";
      break;
    case 1:
      weekDay = "Mon";
      break;
    case 2:
      weekDay = "Tue";
      break;
    case 3:
      weekDay = "Wed";
      break;
    case 4:
      weekDay = "Thu";
      break;
    case 5:
      weekDay = "Fri";
      break;
    case 6:
      weekDay = "Sat";
      break;
  }
  return weekDay;
}

function setDaySuffix(dayNum) {
  let daySuffix;
  switch (dayNum) {
    case 1:
      daySuffix = "st";
      break;
    case 2:
      daySuffix = "nd";
      break;
    case 3:
      daySuffix = "rd";
      break;
    case 21:
      daySuffix = "st";
      break;
    case 22:
      daySuffix = "nd";
      break;
    case 23:
      daySuffix = "rd";
      break;
    case 31:
      daySuffix = "st";
      break;
    default:
      daySuffix = "th";
  }
  return daySuffix;
}

function setMonthName(monthNum) {
  let monthName;
  switch (monthNum) {
    case 0:
      monthName = "Jan";
      break;
    case 1:
      monthName = "Feb";
      break;
    case 2:
      monthName = "Mar";
      break;
    case 3:
      monthName = "Apr";
      break;
    case 4:
      monthName = "May";
      break;
    case 5:
      monthName = "Jun";
      break;
    case 6:
      monthName = "Jul";
      break;
    case 7:
      monthName = "Aug";
      break;
    case 8:
      monthName = "Sep";
      break;
    case 9:
      monthName = "Oct";
      break;
    case 10:
      monthName = "Nov";
      break;
    case 11:
      monthName = "Dec";
      break;
  }
  return monthName;
}