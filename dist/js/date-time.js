const date = new Date();
const sec = date.getSeconds();
//
function getDate() {
  const dayNum = date.getDate();
  const monthNum = date.getMonth();
  const weekDayNum = date.getDay();
  let month;
  let weekDay;
  let dayShortcut;

  switch (monthNum) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "Jun";
      break;
    case 6:
      month = "Jul";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
      break;
  }

  switch (weekDayNum) {
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

  switch (dayNum) {
    case 1:
      dayShortcut = "st";
      break;
    case 2:
      dayShortcut = "nd";
      break;
    case 3:
      dayShortcut = "rd";
      break;
    case 21:
      dayShortcut = "st";
      break;
    case 22:
      dayShortcut = "nd";
      break;
    case 23:
      dayShortcut = "rd";
      break;
    case 31:
      dayShortcut = "st";
      break;
    default:
      dayShortcut = "th";
  }
  const dateContainer = document.querySelector(".day-name");
  dateContainer.innerHTML = `${weekDay}, ${month}, ${dayNum}${dayShortcut}`;
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
  // console.log(sec);
}