import "./../styles/titleBar.css";
import Hamburger from "./../assets/hamburger.png";

export default function createTitleBar() {
  let divs = document.createElement("div");
  divs.classList.add("title-bar");

  const hamburgerImage = new Image();
  hamburgerImage.src = Hamburger;
  hamburgerImage.alt = "hamburger-menu-icon";
  hamburgerImage.classList.add("ham");

  const text = document.createElement("span");
  text.textContent = "To-Do List";

  divs.appendChild(hamburgerImage);
  divs.appendChild(text);
  return divs;
}
