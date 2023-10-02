// DOM
let rowInput = document.querySelector(".inputRow input");
let tasks = document.querySelector(".tasks");
let taskList = document.querySelector(".taskList");
let delButton = document.querySelector(".delButton");


function getTasksFromStorage() {
  const storedTasks = localStorage.getItem('data');
  return storedTasks ? JSON.parse(storedTasks) : [];
}

// Local Storage Functionality
function saveTasksToStorage() {
  localStorage.setItem('data', JSON.stringify(todo));
}

let todo = getTasksFromStorage();

// Creating Task Elements from todo Object
function renderTask() {
  tasks.innerHTML = "";
  todo.forEach((list) => {
    let div = document.createElement("div");
    div.className = `taskList ${list.checked ? 'checked' : ''}`;
    div.innerHTML = `<span onclick="toggleComplete(${list.id})">${list.value}<button onclick="removeTask(${list.id})">&#10005;</button>`;
    tasks.appendChild(div);
  });
  saveTasksToStorage();
}

// addTask Function
function addTask() {
  const newTaskText = rowInput.value.trim();
  if (newTaskText !== '') {
    const newTask = { id: Date.now(), value: newTaskText, checked: false };
    todo.push(newTask);
    renderTask();
    rowInput.value = '';
  }
}

// removeTask Function
function removeTask(taskId) {
  todo = todo.filter((list) => list.id !== taskId);
  renderTask();
}

function toggleComplete(taskId) {
  todo = todo.map(task =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
  );
  renderTask();
}

// Clicking Enter to add the task to the list
rowInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    addTask();
  }
});

renderTask();