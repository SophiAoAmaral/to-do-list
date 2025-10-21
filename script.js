const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        const li = document.createElement("li");
        li.innerHTML = `
        <span>${taskText}</span>
        <button class="editButton" onClick="editTask()">Editar</button>
        <button class="deleteButton" onClick="deleteTask()">Remover</button>
        `
        taskList.appendChild(li);
        taskInput.value = ""
    }
}