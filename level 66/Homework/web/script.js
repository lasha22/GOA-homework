const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const clearCompletedButton = document.getElementById('clearCompletedButton');

addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value;
  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', () => {
      li.classList.toggle('completed'); // Add completed style
    });

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent click on li
      li.remove(); // Remove the task
    });

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = ''; // Clear input
  }
});

clearCompletedButton.addEventListener('click', () => {
  const completedTasks = taskList.querySelectorAll('.completed');
  completedTasks.forEach(task => task.remove());
});

