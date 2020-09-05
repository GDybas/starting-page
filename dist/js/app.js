//Defined variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.tasks-list');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');





loadEventListeners();

function loadEventListeners() {
  //Loading saved data from LS
  document.addEventListener('DOMContentLoaded', getTasks);
  //init date and time
  document.addEventListener('DOMContentLoaded', getDate);
  //init time
  document.addEventListener('DOMContentLoaded', getTime);
  //Adding tasks
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
}

//Add Tasks
function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  const li = document.createElement('li');
  li.className = 'tasks-list__item';
  li.appendChild(document.createTextNode(taskInput.value));
  const link = document.createElement('a');
  link.className = 'delete-item li-aside';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);
  //Store task in LS
  storeTaskInLocalStorage(taskInput.value);

  taskInput.value = '';
  e.preventDefault();
}

//Remove task
function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Sure?')) {
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
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.className = 'tasks-list__item';
    li.appendChild(document.createTextNode(task));
    const link = document.createElement('a');
    link.className = 'delete-item li-aside';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    taskList.appendChild(li);
  })
}

//Store tasks in LS function
function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Remove task from local storage
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach((task, index) => {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

//Clearing all tasks from LS
function clearTasksFromLocalStorage() {
  localStorage.clear();
}