import "./../styles/form.css";

export function createForm() {
  const divs = document.createElement("div");
  const form = document.createElement("form");

  divs.classList.add("form-background");
  // divs.addEventListener("click", (e) => {
  //   if (e.currentTarget === e.target) content.removeChild(content.children[3]);
  // });

  const title = document.createElement("h1");
  title.textContent = "New Task";
  form.appendChild(title);
  form.appendChild(
    createFormElement("text", "task-title", "Title", "task-title")
  );
  form.appendChild(
    createFormElement("date", "due-date", "Due Date", "due-date")
  );
  form.appendChild(createFormElement("text", "project", "Project", "project"));

  const radioContainer = document.createElement("div");
  radioContainer.classList.add("radio-container");
  const radioButtons = [
    createFormElement("radio", "r1", "1", "radio"),
    createFormElement("radio", "r2", "3", "radio"),
    createFormElement("radio", "r3", "2", "radio"),
  ];

  radioButtons.forEach((radioButton) =>
    radioContainer.appendChild(radioButton)
  );

  form.appendChild(radioContainer);

  divs.appendChild(form);
  return divs;
}

function createFormElement(inputType, inputLabel, inputTC, htmlName) {
  const container = document.createElement("div");
  const inp = document.createElement("input");
  const lbl = document.createElement("label");

  inp.type = inputType;
  inp.id = inputLabel;
  inp.name = htmlName;

  lbl.htmlFor = inputLabel;
  lbl.textContent = inputTC;

  container.appendChild(lbl);
  container.appendChild(inp);

  if (inputType !== "radio") container.classList.add("container");

  return container;
}
