// import tasks from "./scripts/coordinator";
import createTitleBar from "./scripts/titleBar";
import createSideBar from "./scripts/sideBar";

import "./styles/style.css";

const content = document.getElementById("content");

content.appendChild(createTitleBar());
content.appendChild(createSideBar());
