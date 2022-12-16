import "./../styles/form.css";
import { updateSidebar, updateBody } from "./updateDOM";
import Task from "./tasks";
import addTask from "./add";
import tasks from "./coordinator";

const content = document.getElementById("content");

export function createForm() {
  const divs = document.createElement("div");
  divs.classList.add("form-background");

  const taskForm = document.createElement("form");
  taskForm.id = "task-form";

  divs.addEventListener("click", (e) => {
    if (e.currentTarget === e.target) content.removeChild(content.children[3]);
  });

  const title = document.createElement("h1");
  title.textContent = "New Task";
  taskForm.appendChild(title);
  taskForm.appendChild(
    createFormElement("text", "task-title", "Title", "task-title")
  );
  taskForm.appendChild(
    createFormElement("date", "due-date", "Due Date", "due-date")
  );
  taskForm.appendChild(
    createFormElement("text", "project", "Project", "project")
  );

  const radioContainer = document.createElement("fieldset");
  radioContainer.classList.add("radio-container");

  const radioLegend = document.createElement("legend");
  radioLegend.textContent = "Priority";
  radioContainer.appendChild(radioLegend);

  const radioButtons = [
    createFormElement("radio", "r1", "High", "radio"),
    createFormElement("radio", "r2", "Medium", "radio"),
    createFormElement("radio", "r3", "Low", "radio"),
  ];

  radioButtons.forEach((radioButton) =>
    radioContainer.appendChild(radioButton)
  );

  taskForm.appendChild(radioContainer);
  const btn = document.createElement("button");
  btn.textContent = "Add Task";
  btn.id = "add-task";
  btn.type = "button";
  btn.addEventListener("click", () => {
    // content.removeChild(content.children[3]);
    getFormInput();
  });

  taskForm.appendChild(btn);
  divs.appendChild(taskForm);
  return { divs, btn };
}

function createFormElement(inputType, inputLabel, inputTC, htmlName) {
  const container = document.createElement("div");
  const inp = document.createElement("input");
  const lbl = document.createElement("label");

  inp.type = inputType;
  inp.id = inputLabel;
  inp.name = htmlName;

  lbl.htmlFor = inputLabel;
  lbl.textContent = inputTC;

  container.appendChild(lbl);
  container.appendChild(inp);

  if (inputType !== "radio") container.classList.add("container");
  else {
    container.classList.add("r-container");
    inp.value = inputLabel.substring(1);
  }
  return container;
}

function getFormInput() {
  const taskTitle = document.getElementById("task-title").value;
  const dueDate = document.getElementById("due-date").value;
  const project = document.getElementById("project").value;
  const priority = Array.from(document.getElementsByName("radio"));
  let priorityValue = "";

  priority.forEach((radio) => {
    if (radio.checked) priorityValue = radio.value;
  });

  let newID = 0;
  for (const key in tasks) {
    tasks[key].forEach(() => newID++);
  }

  addTask(
    new Task(
      newID + 1,
      taskTitle,
      new Date(dueDate),
      priorityValue || 3,
      0,
      project
    )
  );
  content.removeChild(content.children[1]);
  updateSidebar(tasks);
  updateBody("All");
}
