const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
    const taskName = taskInput.value.trim();
    if (taskName === "") return;

    const li = document.createElement("li");
    li.textContent = taskName;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    const del = document.createElement("span");
    del.textContent = "Delete";
    del.className = "deleteBtn";

    del.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(del);
    taskList.appendChild(li);
    taskInput.value = "";
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});
