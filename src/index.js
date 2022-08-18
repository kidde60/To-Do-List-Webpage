import './style.css';

const myArray = JSON.parse(localStorage.getItem('tasks')) || [];
const list = document.querySelector('.list');
const input = document.querySelector('.input-field');
// Display function
function display() {
  let listItem = '';
  myArray.forEach((task) => {
    let completed = '';
    if (task.status === 'completed') {
      completed = 'checked';
    }
    listItem += `<div class="list-item">
                
                    <input class="check" type="checkbox" >
                    <p class="paragraph ${completed}">${task.name}</p>
                
                <div class="action">
                 <button type="button" class="edit">Edit</button>
                 <button type="button" class="delete">Delete</button>
                </div>
         </div>`;
  });
  list.innerHTML = listItem || '<span>No tasks today</span>';
}
// Add task function
function addTask() {
  const object = {
    index: myArray.length,
    name: input.value,
    status: 'pending',
  };

  if (input.value) {
    myArray.push(object);
    localStorage.setItem('tasks', JSON.stringify(myArray));
  }
  display();
  input.value = '';
  window.location.reload();
}
// Delete task function
function delTask(index) {
  myArray.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(myArray));
  display();
  window.location.reload();
}
// Edit task function
function edit(textName) {
  input.value = textName;
  textName = input.value;
  input.focus();
}
// Event listeners
display();
input.addEventListener('keyup', (e) => {
  if (e.key === 'Enter' && input.value.trim()) {
    addTask();
  }
});
const deleteBtn = document.querySelectorAll('.delete');
deleteBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => delTask(index));
});

const editBtn = document.querySelectorAll('.edit');
editBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    edit(myArray[index].name);
    myArray.splice(index, 1);
  });
});
