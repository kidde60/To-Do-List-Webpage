/**
 * @jest-environment jsdom
 */

import {
  tasksDisplay, addTask, removeTask, localstorage,
} from '../__mocks__/add-and-remove.js';
import Task from '../src/Task.js';

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
