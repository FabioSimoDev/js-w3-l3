function addTask() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `
                    <span>${taskText}</span>
                    <button onclick="removeTask(this)">Rimuovi</button>
                `;
    li.addEventListener("mouseover", () => {
      li.style.backgroundColor = "#ebffec";
    });
    li.addEventListener("mouseleave", () => {
      li.style.backgroundColor = "white";
    });
    li.addEventListener("click", () => {
      li.firstElementChild.style.textDecoration = "line-through";
      //li.style.textDecoration = "line-through";
    });
    taskList.appendChild(li);
    taskInput.value = "";
  }
}

function removeTask(button) {
  const taskList = document.getElementById("taskList");
  const li = button.parentElement;
  taskList.removeChild(li);
}
