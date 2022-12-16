import createBody from "./body";

import "./../styles/sideBar.css";
import Date from "./../assets/date.png";
import Month from "./../assets/month.png";
import All from "./../assets/all.png";
import Week from "./../assets/week.png";

const content = document.getElementById("content");

const createSideBar = (tasks) => {
  const divs = document.createElement("div");
  divs.id = "sidebar";

  divs.appendChild(createTab(All, "calendar-icon", "All"));
  divs.appendChild(createTab(Date, "calendar-date-icon", "Today"));
  divs.appendChild(createTab(Week, "calendar-icon", "This Week"));
  divs.appendChild(createTab(Month, "calendar-icon", "This Month"));

  const projects = document.createElement("h1");
  projects.textContent = "Projects";

  divs.appendChild(projects);

  for (const key in tasks) {
    divs.appendChild(createTab("", "", key));
  }

  return divs;
};

function createTab(icon, imageAlt, tabText) {
  const tab = document.createElement("div");
  tab.classList.add("tab");

  const text = document.createElement("span");

  const newImage = new Image();
  newImage.src = icon;
  if (icon) newImage.alt = imageAlt;
  text.textContent = tabText;

  tab.appendChild(newImage);
  tab.appendChild(text);
  tab.id = tabText;
  tab.addEventListener("click", () => {
    content.removeChild(content.children[2]);
    content.appendChild(createBody(tab.textContent));
  });

  return tab;
}

export default createSideBar;
export { createTab };
