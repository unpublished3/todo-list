import "./../styles/sideBar.css";
import Date from "./../assets/date.png";
import Week from "./../assets/week.png";
import Month from "./../assets/month.png";

const createSideBar = () => {
  const divs = document.createElement("div");
  divs.classList.add("sidebar");

  divs.appendChild(createTab(Date, "calendar-date-icon", "Today"));
  divs.appendChild(createTab(Week, "calendar-icon", "This Week"));
  divs.appendChild(createTab(Month, "calendar-icon", "This Month"));

  const projects = document.createElement("h1");
  projects.textContent = "Projects";

  divs.appendChild(projects);

  return divs;
};

function createTab(icon = "", imageAlt, tabText) {
  const tab = document.createElement("div");
  tab.classList.add("tab");

  const text = document.createElement("span");

  const newImage = new Image();
  newImage.src = icon;
  if (icon) newImage.alt = imageAlt;
  text.textContent = tabText;

  tab.appendChild(newImage);
  tab.appendChild(text);
  return tab;
}

export default createSideBar;
