export function setupToDoList() {
  const inputEl = document.getElementById("taskInput");
  const taskBtn = document.getElementById("taskBtn");
  const listEl = document.getElementById("taskList");

  function addTask() {
    const taskText = inputEl.value.trim();

    if (taskText === "") return;

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    listItem.addEventListener("click", () => {
      if (listItem.classList.contains("completed")) {
        listItem.remove();
      } else {
        listItem.classList.add("completed");
      }
    });

    listEl.appendChild(listItem);

    inputEl.value = "";
  }

  taskBtn.addEventListener("click", addTask);
}

export function clearTask() {
  const clearButton = document.querySelector(".clear-btn");

  listEl.innerHTML = "";
  clearButton.addEventListener("click", clearTask);
}
