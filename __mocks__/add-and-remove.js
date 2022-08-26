import LocalStorage from './localStorage.js';

export const localstorage = new LocalStorage();
export const addToDo = () => {
  const task = [];
  const storage = new LocalStorage();;
}
export const tasksDisplay = () => {
  document.body.innerHTML = '<div class="list"></div>';
  localstorage.getAllItems().forEach((task) => {
    const oneTask = document.createElement('div');
    oneTask.classList.add('list-item');
    oneTask.innerHTML = `
    <label for="${task.index}" class="label">
      <input type="checkbox"  ${task.completed} id="${task.index}" class="check-input">
      <p class="parahraph ${task.completed}">${task.description}</p>
    </label>

    <div class="action">
      <button class="edit" id=${task.index} ">Edit</button>
      <button class="delete"  id=${task.index}">delete</button>
    </div>`;

    document.querySelector('.list').appendChild(oneTask);
  });
};

export const addTask = (task) => {
  localstorage.setItem(task);
};

export const removeTask = (index) => {
  localstorage.taskArray.splice(index, 1);
};

// completed test and clear all completed
// export const editTask = (task) => {
//   // const taskIndex = event.target.id;
//   // editIndex = taskIndex;

//   // const isEditedTask = true;
//   // const result = JSON.parse(localStorage.getItem('tasks')).filter(
//   //   (element, index) => index.toString() === taskIndex,
//   // )[0].description;
//   // taskInput.value = result;
//   const isEditedTask = false;
//   if (isEditedTask) {
//     isEditedTask = true;
//     localstorage.setItem(task);
//   }
// }
export const editTask = () => {
  let task = [];
  const storage = new LocalStorage();
  // task = storage.getLocalStorage();
  task = localstorage.getAllItems();
  task.forEach((el) => {
    if (el.index === task.index) {
      el.description = 'hhghfjhfhgdghdg';
    }
    return el;
  });
  localstorage.setItem(task);
  return task;
};

export const checkbox = () => {
  // let task = [];
  // const storage = new LocalStorage();
  // task = storage.getLocalStorage();
  let task = localstorage.getAllItems();
  console.log(task)
  task.completed = true;
  if (task.completed === true) {
    task = {
      description: "value",
      completed: true,
      index: 0,
    };
  }
  // storage.SetLocalStorage(task);
  localstorage.setItem(task);
  return task;
};

