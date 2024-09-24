// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('todo-form');
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');

    // Function to create a new list item
    function createTodoItem(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            ${task} <button onclick="this.parentElement.remove()">Delete</button>
        `;
        return li;
    }

    // Add task on form submit
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const task = taskInput.value.trim();
        if (task) {
            const todoItem = createTodoItem(task);
            todoList.appendChild(todoItem);
            taskInput.value = '';
        }
    });
});
 