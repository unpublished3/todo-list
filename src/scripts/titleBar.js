import "./../styles/titleBar.css";
import Hamburger from "./../assets/hamburger.png";
import { createForm } from "./form";

const content = document.getElementById("content");

export default function createTitleBar() {
  let divs = document.createElement("div");
  divs.classList.add("title-bar");

  const hamburgerImage = new Image();
  hamburgerImage.src = Hamburger;
  hamburgerImage.alt = "hamburger-menu-icon";
  hamburgerImage.classList.add("ham");

  const text = document.createElement("span");
  text.textContent = "To-Do List";

  const right = document.createElement("div");
  right.classList.add("right");

  const add = document.createElement("button");
  add.classList.add("add");
  add.textContent = "+";
  add.addEventListener("click", () => {
    content.appendChild(createForm().divs);
  });

  right.appendChild(hamburgerImage);
  right.appendChild(text);

  divs.appendChild(right);
  divs.appendChild(add);
  return divs;
}
