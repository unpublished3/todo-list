import tasks from "./scripts/coordinator";
import createTitleBar from "./scripts/titleBar";
import createSideBar from "./scripts/sideBar";

import "./styles/style.css";

import { updateSidebar } from "./scripts/updateDOM";

const content = document.getElementById("content");

content.appendChild(createTitleBar());
content.appendChild(createSideBar());
