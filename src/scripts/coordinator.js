let localStorageTasks = JSON.parse(localStorage.tasks);
let tasks = {};

for (const key in localStorageTasks) {
  if (!tasks[key]) tasks[key] = [];

  localStorageTasks[key].forEach((task) => {
    let newTask = {
      title: task.title,
      dueDate: new Date(task.dueDate),
      priority: task.priority,
      check: task.check,
      project: task.project,
    };

    tasks[key].push(newTask);
  });
}

export default tasks;
