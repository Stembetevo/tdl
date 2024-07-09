const taskEntered = document.getElementById("inputtask");
const addTask = document.getElementById("addtask");
const todoList = document.getElementById("listItems");
const todo = []


function createTask(){
    if (taskEntered.value == ""){
        alert("Please enter a task!!!!")
    }else{
        const li = document.createElement("li");
        li.textContent = taskEntered.value

        const doneButton  = document.createElement("button");
        doneButton.innerHTML = "<i class='fa-solid fa-check-double'></i>";
        doneButton.className = "done-button"
        li.appendChild(doneButton)

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "<i class='fa-regular fa-trash-can'></i>"
        deleteBtn.className = "delete-btn"
        li.appendChild(deleteBtn)

        todoList.appendChild(li)
        todo.push(taskEntered.value);
        taskEntered.value = ""

        doneButton.addEventListener("click",()=>{
            li.style.textDecoration = "line-through"
        });

        deleteBtn.addEventListener("click",()=>{
            todoList.removeChild(li);
        })
    }

}
    