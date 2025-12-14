
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


if (localStorage.getItem('lastTaskCount') == undefined) {
    const lastTask = localStorage.setItem("lastTaskCount", "task0");
}
function update(){   
    let check = 0;
    for(let i = 0 ; i < localStorage.length ; i++){
        const k = localStorage.key(i);
        if(k.slice(0,4) == "task"){
            check = Math.max(check,Number(k.slice(4)));
        }
    }
    if(check == 0){
        localStorage.setItem('lastTaskCount','task0');
    }
    else{
        localStorage.setItem('lastTaskCount',"task" + check);
    }
}
function taskcreator() {
    let number = Number(localStorage.getItem('lastTaskCount').slice(4));
    let newTaskName = "task" + Number(number + 1);
    localStorage.setItem('lastTaskCount', newTaskName);
    return String(newTaskName);
}


function writeData(newTaskName) {
    const localobjects = fetchData();
    const kvalue = taskcreator();
    localobjects[kvalue] = newTaskName;
    for (let k in localobjects) {
        localStorage.setItem(k, localobjects[k]);
    }
    return [localobjects, kvalue];
}
function fetchData() {
    const localobjects = () => {
        const newObject = {};
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k.substring(0, 4) == "task") {
                newObject.k = localStorage.getItem(k);
            }
        }
        return newObject;
    }
    return localobjects();
}
function addTask() {
    const now = new Date();
    let taskName = taskInput.value.trim();
    if (taskName === "" || taskName == null) return;
    taskName += " " + " " + " [" + now.toLocaleDateString() + " " + now.toLocaleTimeString() + "]";
    const li = document.createElement("li");
    li.textContent = taskName;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });
    const objectData = writeData(taskName);
    li.id = objectData[1];

    console.log(localStorage);
    const del = document.createElement("span");
    del.textContent = "Delete";
    del.className = "deleteBtn";

    del.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        localStorage.removeItem(li.id);
        update();
        console.log(localStorage);
    });

    li.appendChild(del);
    taskList.appendChild(li);
    taskInput.value = ""
}
addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function listPopulator() {

    console.log("listPopulator has been called.." + localStorage.length)
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k.slice(0,4) == "task") {
            const taskName = localStorage.getItem(k);

            if (taskName === "") return;
            //taskName += " " + " " + " [" + now.toLocaleDateString() + " " + now.toLocaleTimeString() + "]";

            const li = document.createElement("li");
            li.textContent = taskName;

            li.addEventListener("click", () => {
                li.classList.toggle("completed");
            });
            li.id = k;
            const del = document.createElement("span");
            del.textContent = "Delete";
            del.className = "deleteBtn";

            del.addEventListener("click", (e) => {
                e.stopPropagation();
                li.remove();
                localStorage.removeItem(k);
                update();
                console.log(localStorage);
            });
            li.appendChild(del);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }
}

{
    listPopulator();
}

