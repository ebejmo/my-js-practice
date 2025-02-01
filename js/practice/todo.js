export function setupToDoList() {
  const inputEl = document.getElementById("taskInput");
  const taskBtn = document.getElementById("taskBtn");
  const listEl = document.getElementById("taskList");
  const clearButton = document.querySelector(".clear-btn");

  function addTask() {
    const taskText = inputEl.value.trim();
    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
      if (listItem.classList.contains("completed")) {
        setTimeout(() => {
          listItem.remove();
        }, 500);
      }
    });

    listEl.appendChild(listItem);
    inputEl.value = "";
  }

  function clearTask() {
    listEl.innerHTML = "";
  }

  taskBtn.addEventListener("click", addTask);
  clearButton.addEventListener("click", clearTask);
}
