/**
 * @jest-environment jsdom
 */

import { tasksDisplay, addTask, removeTask, localstorage, editButton, editTask, checkBtn } from '../__mocks__/functionsMock.js';
import Task from '../src/Task.js';
import { appendChild } from 'parse5/lib/tree-adapters/default.js';
import { add, remove } from 'lodash';
 
describe('add a task to the list', () => {
   test('should give Task 1 as the description of the first task', () => {
     const task1 = new Task(1, 'Task 1', false);
     const task2 = new Task(2, 'Task 2', false);
 
     addTask(task1);
     addTask(task2);
     
     expect(localstorage.getAllItems()[0].description).toBe('Task 1');
   });
 
   test('should have a length of 2 after adding two tasks to the list in the DOM', () => {
     tasksDisplay();
 
     const listContainer = Array.from(document.querySelector('.list').childNodes);
     
     expect(listContainer.length).toBe(2);
   });
});
 
describe('remove a task from the list', () => {
   test('should give Task 2 as the first task after removing Task 1 from the list', () => {
     removeTask(0);
 
     expect(localstorage.getAllItems()[0].description).toBe('Task 2');
   });
 
   test('should have a length of 1 after removing Task 1 from the list in the DOM', () => {
     tasksDisplay();
 
     const listContainer = Array.from(document.querySelector('.list').childNodes);
     
     expect(listContainer.length).toBe(1);
   });
});
 
describe('edit a task in the list', () => {
   test('should change description from Task 2 to New Task', () => {
     let taskA = localstorage.getItem(0);
     let taskAIndex = localstorage.getItem(0).index;
 
     let newDescription = 'New Task';
 
     editButton(taskA, taskAIndex, newDescription);
 
     tasksDisplay();

     expect(localstorage.getItem(0).description).toBe('New Task');
   });
 
   test('the index of edited task should still be 0', () => {
     expect(localstorage.getItem(0).index).toBe(0);
   });
 
   test('should still have a length of 1 after editing a task', () => {
     tasksDisplay();
 
     const listContainer = Array.from(document.querySelector('.list').childNodes);
     
     expect(listContainer.length).toBe(1);
   });
 
   test('should have New Task as the edited description in the DOM', () => {
     tasksDisplay();
 
    //<p> in the edited task which in this example/test is the first element in node list
    const p = document.querySelector('.parahraph');

    expect(p.textContent).toBe('New Task');
   });
});

describe('complete property of a task in a list', () => {
  test('change all checked item\'s completed status to true', () => {
    const a = new Task(1, 'A', false);
    const b = new Task(2, 'B', false);
    const c = new Task(3, 'C', false);
    const d = new Task(4, 'D', false);

    addTask(a);
    addTask(b);
    addTask(c);
    addTask(d);

    tasksDisplay();

    let checkedTasks = [];
    const taskA = document.getElementById('1'); // A
    const taskC = document.getElementById('3'); // C

    let id1 = taskA.getAttribute('id');
    let id2 = taskC.getAttribute('id');

    taskA.checked = true;
    taskC.checked = true;
    taskA.classList.add('checked');
    taskC.classList.add('checked');

    checkedTasks.push(id1, id2);

    checkBtn(checkedTasks);

    expect(localstorage.getItem(1).completed).toBe(true);
    expect(localstorage.getItem(3).completed).toBe(true);
  });  
});

describe('clear all completed tasks from the list', () => {
  test('should have a length of 3 after removing the completed tasks', () => {
    removeTask(1);
    removeTask(2);  

    expect(localstorage.getAllItems().length).toBe(3);
  });

  test('should have a length of 3 after removing from the list in the DOM', () => {
    tasksDisplay();

    const listContainer = Array.from(document.querySelector('.list').childNodes);

    expect(listContainer.length).toBe(3);
  });

  test('should have B at index 1 after removing two tasks from the list', () => {
    console.log(localstorage.getAllItems());

    expect(localstorage.getItem(1).description).toBe('B');
  });
});
 