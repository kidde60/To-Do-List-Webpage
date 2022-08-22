import './style.css';
import './modules/complete.js';

const taskContainer = document.querySelector('.list');
const taskInput = document.querySelector('.input-field');

let editIndex;
let isEditedTask = false;
// getting localStorage tasks
let localTasks = JSON.parse(localStorage.getItem('tasks'));

function resetIndex() {
  localTasks.forEach((item, index) => {
    item.index = index + 1;
    localStorage.setItem('tasks', JSON.stringify(localTasks));
  });
}

function removeTask(e) {
  const start = e.target;
  const deleteTasks = parseInt(start.id, 10);

  localTasks.splice(deleteTasks, 1);
  // eslint-disable-next-line no-use-before-define
  tasksDisplay();
  resetIndex();
  localStorage.setItem('tasks', JSON.stringify(localTasks));
}

function trashBtn() {
  document.querySelectorAll('.delete').forEach((el) => {
    el.addEventListener('click', removeTask);
  });
}

function editTask(event) {
  const taskIndex = event.target.id;
  editIndex = taskIndex;
  isEditedTask = true;
  const result = JSON.parse(localStorage.getItem('tasks')).filter(
    (element, index) => index.toString() === taskIndex,
  )[0].description;
  taskInput.value = result;
}

const editButton = () => {
  document.querySelectorAll('.edit').forEach((el) => {
    el.addEventListener('click', editTask);
  });
};

function checkTask(event) {
  const taskName = event.target.parentElement.lastElementChild;
  if (event.target.checked) {
    taskName.classList.add('checked');
    localTasks[event.target.id].completed = true;
  } else {
    taskName.classList.remove('checked');
    localTasks[event.target.id].completed = false;
  }
  localStorage.setItem('tasks', JSON.stringify(localTasks));
}

function checkBtn() {
  document.querySelectorAll('.check-input').forEach((el) => {
    el.addEventListener('click', checkTask);
  });
}

function tasksDisplay() {
  let div = '';
  if (localTasks) {
    localTasks.forEach((task, id) => {
      const isCompleted = task.completed === true ? 'checked' : '';
      div += `
        <div class="list-item">
          <label for="${id}" class="label">
          <input type="checkbox"  ${isCompleted} id="${id}" class="check-input">
          <p class="parahraph ${isCompleted}">${task.description}</p>
          </label>
      
        
          <div class="action">
          <button class="edit" id=${id} ">Edit</button>
          <button class="delete"  id=${id}">delete</button>
          </div>
        </div>
      
      `;
    });
  }
  taskContainer.innerHTML = div;

  editButton();
  trashBtn();
  checkBtn();
}

function addTasks(e) {
  const EnteredTask = taskInput.value.trim();
  if (e.key === 'Enter' && EnteredTask) {
    if (!isEditedTask) {
      if (!localTasks) {
        localTasks = [];
      }
      const arrayStore = JSON.parse(localStorage.getItem('tasks')) || [];
      const arrayLength = arrayStore.length;
      const taskInfo = {
        description: EnteredTask,
        completed: false,
        index: arrayLength + 1,
      };
      localTasks.push(taskInfo);
    } else {
      isEditedTask = false;
      localTasks[editIndex].description = EnteredTask;
    }
    taskInput.value = '';
    localStorage.setItem('tasks', JSON.stringify(localTasks));

    tasksDisplay();
  }
}

window.addEventListener('load', () => {
  taskInput.addEventListener('keyup', addTasks);
  tasksDisplay();
});
