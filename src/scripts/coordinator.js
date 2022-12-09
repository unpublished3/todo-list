import Task from "./tasks";
import addTask from "./add";

let tasks = {};
export default tasks;

addTask(new Task("A", "B", "C", "d", "E", "p1"));
addTask(new Task("B", "C", "D", "d", "E", "p1"));
addTask(new Task("B", "C", "D", "d", "E", "p2"));
