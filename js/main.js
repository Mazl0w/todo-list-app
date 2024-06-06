document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    taskList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            e.target.parentElement.remove();
        } else if (e.target.tagName === 'INPUT' && e.target.type === 'checkbox') {
            e.target.parentElement.classList.toggle('completed');
        }
    });

    function addTask(task) {
        const li = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        li.appendChild(checkbox);
        
        const span = document.createElement('span');
        span.textContent = task;
        li.appendChild(span);
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        li.appendChild(removeButton);
        
        taskList.appendChild(li);
    }
});
