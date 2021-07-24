// Define UI variable's
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load Event Listeners

loadEventListeners();

// Load all Event Listeners Function
function loadEventListeners() {
    // Add Task Event
    form.addEventListener('submit', addTask);
}

// Add Task
function addTask(e) {
    if (taskInput.value === '') {
        alert('Fields are Empty');
    }

    // Create li into HTML Element
    const li = document.createElement('li');
    // Add Class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new Link Element
    const link = document.createElement('a');
    // Add Class
    link.className = 'delete-item secondary-content';
    // Add Icon HTML
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append the link to li
    li.appendChild(link);
    // Append li to ul
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';


    e.preventDefault();
}