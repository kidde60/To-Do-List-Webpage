/**
 * @jest-environment jsdom
 */

// {

//         description: 'value',
//         completed: false,
//         index: 0

// }

describe('Add task to array', () => {
    const taskArray = []
    const task1 = {
        description: 'value',
        completed: false,
        index: 0,
    };
    taskArray.push(task1);

})
// exprect(addTasks(e)).toBe(array of object)
