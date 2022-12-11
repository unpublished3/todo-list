import tasks from "./scripts/coordinator";
import createTitleBar from "./scripts/titleBar";
import createSideBar from "./scripts/sideBar";
import createBody from "./scripts/body";

import "./styles/style.css";

const content = document.getElementById("content");

content.appendChild(createTitleBar());
content.appendChild(createSideBar());
content.appendChild(createBody("All"));
