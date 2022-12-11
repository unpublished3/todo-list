import Task from "./tasks";
import addTask from "./add";

let tasks = {};
export default tasks;

addTask(new Task("A", "B", "C", 1, 0, "p1"));
addTask(new Task("B", "C", "D", 2, 1, "p1"));
addTask(new Task("B", "C", "D", 3, 1, "p2"));
