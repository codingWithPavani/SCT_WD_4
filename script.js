// const taskInput = document.getElementById("taskInput");
// const addTask = document.getElementById("addTask");
// const taskList = document.getElementById("taskList");

// // Load tasks from local storage when page loads
// document.addEventListener("DOMContentLoaded", loadTasks);

// // Add Task
// addTask.addEventListener("click", function () {
//     if (taskInput.value.trim() !== "") {
//         addNewTask(taskInput.value.trim());
//         saveTasks();
//         taskInput.value = "";
//     }
// });

// // Allow pressing "Enter" to add a task
// taskInput.addEventListener("keypress", function (event) {
//     if (event.key === "Enter") {
//         addTask.click();  // Trigger button click
//     }
// });


//  function addNewTask(taskText, isCompleted = false) {
//         const li = document.createElement("li");
    
//         li.innerHTML = `
//             <input type="checkbox" class="check" ${isCompleted ? "checked" : ""}>
//             <span>${taskText}</span>
//             <button class="delete"><img src="delete.gif" alt="delete"></button>
//         `;
       
//         const checkbox = li.querySelector(".check");
//         checkbox.addEventListener("change", function () {
//         if (checkbox.checked) {
            
//             li.classList.add("completed");
//         } else {
//             li.classList.remove("completed");
//         }
//         saveTasks();
//     });

//     // Delete task
//     li.querySelector(".delete").addEventListener("click", function (e) {
//          e.stopPropagation(); // Prevents the toggle event
//         li.remove();
//         saveTasks();
//     });
//     if (isCompleted) {
//         li.classList.add("completed");
//     }

//     taskList.appendChild(li);
// }

    



// // Save tasks to local storage
// function saveTasks() {
//     const tasks = [];
//     document.querySelectorAll("#taskList li").forEach((li) => {
//         tasks.push({
//             text: li.querySelector("span").textContent,
//             completed: li.classList.contains("completed"),
//         });
//     });
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }


// function loadTasks() {
//     const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     savedTasks.forEach((task) => {
//         addNewTask(task.text, task.completed);
//     });
// }












const taskInput = document.getElementById("taskInput");
const addTask = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

// Load tasks from local storage when page loads
document.addEventListener("DOMContentLoaded", loadTasks);

// Add Task
addTask.addEventListener("click", function () {
  if (taskInput.value.trim() !== "") {
    addNewTask(taskInput.value.trim());
    saveTasks();
    taskInput.value = "";
  }
});

// Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask.click(); // Trigger button click
  }
});

function addNewTask(taskText, isCompleted = false) {
  const li = document.createElement("li");

  li.innerHTML = `
    <input type="checkbox" class="check" ${isCompleted ? "checked" : ""}>
    <span>${taskText}</span>
    <button class="delete"><img src="delete.gif" alt="delete" height="20"/></button>
  `;

  const checkbox = li.querySelector(".check");
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      li.classList.add("completed");
    } else {
      li.classList.remove("completed");
    }
    saveTasks();
  });

  // Delete task
  li.querySelector(".delete").addEventListener("click", function (e) {
    e.stopPropagation();
    li.remove();
    saveTasks();
  });

  if (isCompleted) {
    li.classList.add("completed");
  }

  taskList.appendChild(li);
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push({
      text: li.querySelector("span").textContent,
      completed: li.classList.contains("completed"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    addNewTask(task.text, task.completed);
  });
}


