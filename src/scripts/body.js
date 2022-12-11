import tasks from "./coordinator";
import "./../styles/body.css";

import Pencil from "./../assets/pencil.png";
import Trash from "./../assets/trash.png";

export default function createBody(project) {
  const bdy = document.createElement("main");

  const title = document.createElement("h1");
  title.textContent = project;

  const allTasks = document.createElement("ul");

  for (const key in tasks) {
    tasks[key].forEach((task) => {
      allTasks.appendChild(createAllTasks(task));
    });
  }

  bdy.appendChild(title);
  bdy.appendChild(allTasks);
  return bdy;
}

function createAllTasks(task) {
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container");

  const front = document.createElement("div");

  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = task.check;

  const title = document.createElement("span");
  title.textContent = task.title;

  front.appendChild(check);
  front.appendChild(title);

  const dueDate = document.createElement("text");
  dueDate.textContent = task.dueDate;
  dueDate.classList.add("date");

  const back = document.createElement("div");

  back.appendChild(dueDate);
  back.appendChild(createImage(Pencil, "pencil"));
  back.appendChild(createImage(Trash, "trash"));

  taskContainer.appendChild(front);
  taskContainer.appendChild(back);

  taskContainer.classList.add(`priority-${task.priority}`);
  return taskContainer;
}

function createImage(img, id) {
  const requiredImage = new Image();
  requiredImage.src = img;
  requiredImage.alt = `${id}-icon`;

  requiredImage.id = id;
  requiredImage.classList.add("task-icons");

  return requiredImage;
}
