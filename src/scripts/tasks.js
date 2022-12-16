export default class Task {
  constructor(id, title, dueDate, priority, check, project) {
    this.id = id;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.check = check;
    this.project = project;
  }
}
