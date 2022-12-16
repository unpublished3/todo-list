import Task from "./tasks";
import addTask from "./add";

let tasks = {};
export default tasks;

addTask(new Task("A", new Date("2022-12-14"), 1, 0, "p1"));
addTask(new Task("B", new Date("2022-12-27"), 2, 0, "p1"));
addTask(new Task("B", new Date("2022-12-15"), 3, 0, "p2"));
addTask(new Task("A", new Date("2022-12-1"), 2, 0, "p3"));
addTask(new Task("A", new Date("2022-11-2"), 2, 0, "p2"));
addTask(new Task("A", new Date("2023-02-3"), 3, 0, "p3"));

// createForm().btn.addEventListener("click", getFormInput);
// createForm().btn.addEventListener("click", () => console.log(":("));
