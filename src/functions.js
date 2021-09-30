function Note(title, description, dueDate, priority ){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
};

function Project(projectName, projectNotes) {
    this.name = projectName;
    this.notes = projectNotes;
};

