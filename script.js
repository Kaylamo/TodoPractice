document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button onclick="removeTask(this)">✖</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
