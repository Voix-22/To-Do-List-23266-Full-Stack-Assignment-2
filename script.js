const addBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const categorySelect = document.getElementById('category');

function addTask() {

    const text = taskInput.value.trim();
    const category = categorySelect.value;

    if (text === "") {
        alert("Task cannot be empty!");
        return;
    }

    const li = document.createElement('li');
    li.classList.add(category);

    const now = new Date();
    const timestamp = now.toLocaleString();


    const contentDiv = document.createElement("div");
    contentDiv.className = "task-content";
    contentDiv.innerHTML = `
        <strong>${text}</strong><br>
        <small>${category} - ${timestamp}</small>
    `;

    
    contentDiv.addEventListener("click", function () {
        li.classList.toggle("completed");
    });

    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation(); 
        taskList.removeChild(li);
    });

    
    li.appendChild(contentDiv);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});