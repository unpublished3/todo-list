import tasks from "./coordinator";

export default function addTask(task) {
  if (!tasks.hasOwnProperty(task.project)) {
    tasks[task.project] = [];
  }
  tasks[task.project].push(task);
}
