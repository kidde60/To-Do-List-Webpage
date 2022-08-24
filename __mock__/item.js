const tasksDisplay = require('./src/index.js')

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