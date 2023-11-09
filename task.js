function addTask() {
  const taskInput = document.getElementById('task');
  const taskDate = document.getElementById('task-date');
  const taskList = document.getElementById('task-list');

  if (taskInput.value && taskDate.value) {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `<span>${taskInput.value} - ${taskDate.value}</span><button onclick="deleteTask(this)">Delete</button>`;
      taskList.appendChild(taskItem);

      taskInput.value = '';
      taskDate.value = '';
  }
}

function deleteTask(button) {
  const taskList = document.getElementById('task-list');
  taskList.removeChild(button.parentElement);
}
