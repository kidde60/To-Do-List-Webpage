/**
 * @jest-environment jsdom
 */

// { description: 'value', completed: false, index: 0,};

import "./src/index.js"

// mock the addTasks in ./__mock__/item.js

describe('Add task/object to array', () => {
    let e;
    const EnteredTask1 = 'William';

    const taskArray = []
    const task1 = {
        description: EnteredTask1,
        completed: false,
        index: 0,
    };
    taskArray.push(task1);
    
    expect(addTasks(e)).toBe(taskArray);
})

