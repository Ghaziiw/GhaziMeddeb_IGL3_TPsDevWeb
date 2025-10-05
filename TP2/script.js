let taskList=[];
console.log("Hello World");

// Load tasks on page load
window.onload = function() {
    const savedTasks = localStorage.getItem('taskList');
    if (savedTasks) {
        taskList = JSON.parse(savedTasks);
        renderTaskList();
    }
};

//event listener for add and clear all buttons
document.getElementById('add-button').addEventListener("click", addTask);
document.getElementById('clear-button').addEventListener("click", deleteAllTasks);

//event listeners for enter key
document.getElementById('task-input').addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        addTask();
    }
});

//add task function
function addTask() {
    const input = document.getElementById('task-input').value.trim();

    if (input !== "") {
        taskList.push({text: input, done: false});
        renderTaskList();
        document.getElementById('task-input').value = '';
    }
}

//delete task function
function deleteTask(button) {
    const li = button.parentElement;
    const ul = document.getElementById('task-list');
    const index = Array.from(ul.children).indexOf(li);
    if (index > -1) {
        taskList.splice(index, 1);
    }
    renderTaskList();
}

//delete all tasks function
function deleteAllTasks() {
    const confirmation = confirm("Are you sure you want to delete all tasks?");
    if (confirmation) {
        taskList = [];
        renderTaskList();
    }
}

// Function to re-render the task list
function renderTaskList() {
    const ul = document.getElementById('task-list');
    ul.innerHTML = '';
    for (let i = 0; i < taskList.length; i++) {
        const li = document.createElement('li');
        li.innerHTML =
            (taskList[i].done
                ? `<span style="text-decoration:line-through">${taskList[i].text}</span>`
                : taskList[i].text) +
            "<button class='delete-button' onclick='deleteTask(this)'>Delete</button>" +
            `<button class='done-button' onclick='markAsDone(this)'>${taskList[i].done ? "Undone" : "Done"}</button>`;
        ul.appendChild(li);
    }
    saveTasksToLocalStorage();
    updateTaskCounters();
}


// Saving and overriding the addTask function to use the rendering method
const originalAddTask = addTask;
addTask = function() {
    const li = button.parentElement;
    const ul = document.getElementById('task-list');
    const index = Array.from(ul.children).indexOf(li);
    if (index > -1) {
        taskList[index].done = !taskList[index].done;
        renderTaskList();
    }
}

function markAsDone(button) {
    const li = button.parentElement;
    const ul = document.getElementById('task-list');
    const index = Array.from(ul.children).indexOf(li);
    if (index > -1) {
        taskList[index].done = !taskList[index].done;
        renderTaskList();
    }
}

function loadTasksFromLocalStorage() {
    const data = localStorage.getItem('taskList');
    if (data) {
        taskList = JSON.parse(data);
    }
}
    const ul = document.getElementById('task-list');
    ul.innerHTML = '';
function saveTasksToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

function updateTaskCounters() {
    const total = taskList.length;
    const done = taskList.filter(task => task.done).length;
    const inProgress = total - done;

    let counterDiv = document.getElementById('task-counters');
    if (!counterDiv) {
        counterDiv = document.createElement('div');
        counterDiv.id = 'task-counters';
        document.body.insertBefore(counterDiv, document.getElementById('task-list'));
    }
    counterDiv.innerHTML = `Tâches terminées : ${done} | Tâches en cours : ${inProgress}`;
}


function searchTasks() {
    const query = document.getElementById('task-search').value.trim().toLowerCase();
    const ul = document.getElementById('task-list');
    ul.innerHTML = '';
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].text.toLowerCase().includes(query)) {
            const li = document.createElement('li');
            li.innerHTML =
                (taskList[i].done
                    ? `<span style="text-decoration:line-through">${taskList[i].text}</span>`
                    : taskList[i].text) +
                "<button class='delete-button' onclick='deleteTask(this)'>Delete</button>" +
                `<button class='done-button' onclick='markAsDone(this)'>${taskList[i].done ? "Undone" : "Done"}</button>`;
            ul.appendChild(li);
        }
    }
    updateTaskCounters();
}
document.getElementById('task-search').addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchTasks();
    }
});