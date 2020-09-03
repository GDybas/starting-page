//Defined variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.tasks-list');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');





loadEventListeners();

function loadEventListeners() {
  //init date and time
  document.addEventListener('DOMContentLoaded', getDate);
  //init time
  document.addEventListener('DOMContentLoaded', getTime);
  //Adding tasks
  form.addEventListener('submit', addTask);
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

  taskInput.value = '';
  e.preventDefault();
}