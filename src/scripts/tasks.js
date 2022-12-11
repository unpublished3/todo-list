export default class Task {
  constructor(title, description, dueDate, priority, check, project) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.check = check;
    this.project = project;
  }
}
