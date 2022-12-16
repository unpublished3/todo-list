import "./../styles/form.css";

export function createForm() {
  const divs = document.createElement("div");
  const form = document.createElement("form");

  divs.classList.add("form-background");
  divs.addEventListener("click", (e) => {
    if (e.currentTarget === e.target) content.removeChild(content.children[3]);
  });

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

  const radioContainer = document.createElement("fieldset");
  radioContainer.classList.add("radio-container");

  const radioLegend = document.createElement("legend");
  radioLegend.textContent = "Priority";
  radioContainer.appendChild(radioLegend);

  const radioButtons = [
    createFormElement("radio", "r1", "High", "radio"),
    createFormElement("radio", "r2", "Medium", "radio"),
    createFormElement("radio", "r3", "Low", "radio"),
  ];

  radioButtons.forEach((radioButton) =>
    radioContainer.appendChild(radioButton)
  );

  form.appendChild(radioContainer);
  const btn = document.createElement("button");
  btn.textContent = "Add Task";
  btn.id = "add-task";
  btn.type = "button";

  form.appendChild(btn);
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
  else container.classList.add("r-container");
  return container;
}
