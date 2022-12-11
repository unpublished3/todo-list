import tasks from "./scripts/coordinator";
import createTitleBar from "./scripts/titleBar";
import createSideBar from "./scripts/sideBar";
import createBody from "./scripts/body";

import "./styles/style.css";

const content = document.getElementById("content");

content.appendChild(createTitleBar());
content.appendChild(createSideBar(tasks));
content.appendChild(createBody("All"));

const tabs = Array.from(document.getElementsByClassName("tab"));

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    content.removeChild(content.children[2]);
    content.appendChild(createBody(tab.textContent));
  });
});
