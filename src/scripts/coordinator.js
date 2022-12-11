import Task from "./tasks";
import addTask from "./add";

let tasks = {};
export default tasks;

addTask(new Task("A", "B", new Date("2022-12-11"), 1, 0, "p1"));
addTask(new Task("B", "C", new Date("2022-12-27"), 2, 1, "p1"));
addTask(new Task("B", "C", new Date("2022-12-15"), 3, 1, "p2"));
addTask(new Task("A", "B", new Date("2022-12-1"), 1, 0, "p3"));
addTask(new Task("A", "B", new Date("2022-11-2"), 1, 0, "p2"));
addTask(new Task("A", "B", new Date("2023-02-3"), 1, 1, "p3"));
