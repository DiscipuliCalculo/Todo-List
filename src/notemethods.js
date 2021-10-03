function Note(title, description, dueDate, priority ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
};

export function Project(projectName) {
    this.name = projectName;
    this.notes = [];
};

export function addProject(projectList, newProject) {
    projectList.push(newProject);
};

//export { Note, Project, addProject };