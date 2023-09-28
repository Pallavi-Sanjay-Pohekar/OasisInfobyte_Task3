const taskInput = document.getElementById("task");
const pendingList = document.getElementById("pending-list");
const completedList = document.getElementById("completed-list");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        `;

        pendingList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.add("completed");
    completedList.appendChild(taskItem);
    button.parentNode.removeChild(button);
}

function editTask(button) {
    const taskItem = button.parentElement;
    const taskText = taskItem.querySelector("span").textContent;
    const editedText = prompt("Edit task:", taskText);

    if (editedText !== null) {
        taskItem.querySelector("span").textContent = editedText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.parentNode.removeChild(taskItem);
}
