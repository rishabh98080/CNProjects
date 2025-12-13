
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

if(localStorage.getItem('lastTaskCount') == undefined){
    const lastTask = localStorage.setItem("lastTaskCount","task0");

}
function taskcreator(){
    let number  = Number(localStorage.getItem('lastTaskCount').slice(4));
    let newTaskName = "task" + Number(number + 1);
    localStorage.setItem('lastTaskCount',newTaskName);
    return String(newTaskName);
}


function writeData(newTaskName){
    const localobjects = fetchData();
    const kvalue = taskcreator();
    localobjects[kvalue] = newTaskName;
    for(let k in localobjects){
        localStorage.setItem(k,localobjects[k]);
    }
    return [localobjects,kvalue];
}
function fetchData(){
    const localobjects = () =>{
        const newObject = {};
        for(let i = 0 ; i < localStorage.length;i++){
            const k = localStorage.key(i);
            if(k.substring(0,4) == "task"){
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
    if (taskName === "" ) return;
    taskName += " " +" "+ " [" + now.toLocaleDateString() + " " + now.toLocaleTimeString()+"]";
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

function listPopulator(){
    
    for(let i = 0 ; i < localStorage.length; i++){
        const key = localStorage.key(i);

        if(key.slice(0,4) == "task"){
            let taskName = taskInput.value.trim();
            if (taskName === "" ) return;
            taskName += " " +" "+ " [" + now.toLocaleDateString() + " " + now.toLocaleTimeString()+"]";

            const li = document.createElement("li");
            li.textContent = taskName;

            li.addEventListener("click", () => {
                li.classList.toggle("completed");
            });
            li.id = key;
            const del = document.createElement("span");
            del.textContent = "Delete";
            del.className = "deleteBtn";

            del.addEventListener("click", (e) => {
                e.stopPropagation();
                li.remove();
                localStorage.removeItem(key);
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

