import tasks from "./scripts/coordinator";
import createTitleBar from "./scripts/titleBar";
import createSideBar from "./scripts/sideBar";
import createBody from "./scripts/body";

import "./styles/style.css";

const content = document.getElementById("content");

content.appendChild(createTitleBar());
content.appendChild(createSideBar(tasks));
content.appendChild(createBody("All"));

// import addTask from "./scripts/add";
// import { updateSidebar, updateBody } from "./scripts/updateDOM";
// import Task from "./scripts/tasks";

// setTimeout(() => {
//   addTask(new Task("D", new Date("2022-12-6"), 2, 0, "p7"));
//   updateSidebar();
//   updateBody("All");
// }, 2000);
