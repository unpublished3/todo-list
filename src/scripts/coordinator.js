let localStorageTasks = {};
let tasks = {};

if (localStorage.tasks) localStorageTasks = JSON.parse(localStorage.tasks);

for (const key in localStorageTasks) {
  if (!tasks[key]) tasks[key] = [];

  localStorageTasks[key].forEach((task) => {
    let newTask = {
      id: task.id,
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
