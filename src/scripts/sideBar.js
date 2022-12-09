import "./../styles/sideBar.css";

const createSideBar = () => {
  const divs = document.createElement("div");
  divs.classList.add("sidebar");
  return { divs };
};

export default createSideBar;
