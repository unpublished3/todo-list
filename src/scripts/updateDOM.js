import createSideBar from "./sideBar";
import createBody from "./body";
import tasks from "./coordinator";

const content = document.getElementById("content");

function updateSidebar() {
  console.log(content.children);
  content.removeChild(content.children[1]);
  content.removeChild(content.children[1]);

  console.log(tasks);
  content.appendChild(createSideBar(tasks));
}

function updateBody(project) {
  content.appendChild(createBody(project));
}

export { updateSidebar, updateBody };
