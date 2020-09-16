//Defined variables

const form = document.querySelector("#task-form");
const taskList = document.querySelector(".tasks-list");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

//Quotes Variables
const quote = document.querySelector(".quote__text");
const author = document.querySelector(".quote__author");

loadEventListeners();


function loadEventListeners() {
  //weather listeners
  tempInfo.addEventListener('click', tempUnitChange);
  // document.addEventListener('DOMContentLoaded', displayWeather);
  //Loading saved data from LS
  document.addEventListener("DOMContentLoaded", getTasks);
  //init date and time
  document.addEventListener("DOMContentLoaded", getDate);
  //init time
  document.addEventListener("DOMContentLoaded", getTime);
  //Fetching quote function
  document.addEventListener("DOMContentLoaded", loadQuote);
  //Adding tasks
  form.addEventListener("submit", addTask);
  taskList.addEventListener("click", removeTask);
  clearBtn.addEventListener("click", clearTasks);

}

//Add Tasks
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task");
  }

  const li = document.createElement("li");
  li.className = "tasks-list__item";
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement("a");
  link.className = "delete-item li-aside";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);
  //Store task in LS
  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = "";
  e.preventDefault();
}

//Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are You Sure?")) {
      e.target.parentElement.parentElement.remove();

      //remove form LS
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }
}

function clearTasks(e) {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  clearTasksFromLocalStorage();
}

//LOCAL STORAGE-----------------------------------------

//Get Task from LS function
function getTasks() {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = "tasks-list__item";
    li.appendChild(document.createTextNode(task));
    const link = document.createElement("a");
    link.className = "delete-item li-aside";
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
  });
}

//Store tasks in LS function
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem("tasks") === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
  }
  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Clearing all tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//Load quote ---------------------------------------------------------------
function loadQuote(e) {
  fetch("https://api.quotable.io/random")
    .then(response => response.json())
    .then(data => {
      quote.innerHTML = `${data.content}`;
      author.innerHTML = `~ ${data.author}`;
    });
  e.preventDefault();
}

// NEWS API need to be server request
// function getNews() {
//   const apiKey = '22c13112be454f6fba77a96953475c6b';
//   // let api = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + `apiKey=22c13112be454f6fba77a96953475c6b`;
//   // let api = 'https://eventregistry.org/api/v1/article/getArticles?resultType=articles&keyword=Bitcoin&keyword=Litecoin&keywordOper=or&lang=eng&articlesSortBy=date&includeArticleConcepts=true&articleBodyLen=300&forceMaxDataTimeWindow=31&apiKey=API_KEY';

//   let api = 'https://newsapi.org/v2/sources?apiKey=22c13112be454f6fba77a96953475c6b';

//   fetch(api).then(response => {
//       let data = response.json();
//       return data;
//     })
//     .then(data => {
//       console.log(data);
//     });

// }

// getNews();