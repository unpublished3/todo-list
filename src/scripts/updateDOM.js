import createSideBar from "./sideBar";
import tasks from "./coordinator";

const content = document.getElementById("content");

function updateSidebar() {
  content.removeChild(content.children[1]);
  content.removeChild(content.children[1]);

  content.appendChild(createSideBar(tasks));
}

export { updateSidebar };
