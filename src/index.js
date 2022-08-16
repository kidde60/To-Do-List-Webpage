import './style.css';

const myArray = [
  {
    description: 'Wash dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'clean house',
    completed: false,
    index: 0,
  },
];
const list = document.querySelector('.list');
myArray.forEach((task, index) => {
  list.innerHTML += `
      <li class="list-item">
      <input type="checkbox" class="check" index="${index}" job="${task.completed}">
      <p class="paragraph">${task.description}</p>
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>
      `;
});