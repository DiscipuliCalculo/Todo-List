import { createDiv, clearProjects } from "./dommethods"
import { projectRender } from "./render"

let projectList = [];
projectList.push(new Project('default'))
//addProject(projectList,new Project("default"));
let selectedProject = projectList[0];

export function Note(title, description) {
    this.title = title;
    this.description = description;
};

export function Project(projectName) {
    this.name = projectName;
    this.notes = [];
};

export function cancelText (elementId, elementClass) {
    document.getElementById(elementId).addEventListener('click', (e) => {
        const formList = document.getElementsByClassName(elementClass)
        e.preventDefault() 
        formList[0].innerHTML = ''
    })
};

export function displayNotes () {
    for (let i = 0; i < selectedProject['notes'].length; i++) {
        let newDiv = createDiv(selectedProject['notes'][i]['description']);
        const shownNotes = document.getElementById('note-list');
        shownNotes.appendChild(newDiv);
    };
}

export function displayProjects () {
    for (let i = 0; i < projectList.length; i++) {
        let newDiv = createDiv(projectList[i].name);
        const shownProjects = document.getElementById('project-list');
        shownProjects.appendChild(newDiv);
    };
};

export function submitNoteText (elementId, elementClass) {
    document.getElementById(elementId).addEventListener('click', (e) => {
        const formList = document.getElementsByClassName(elementClass);
        e.preventDefault();
        const formText = formList[0].elements[0].value;
        selectedProject['notes'].push(new Note('', formText));
        formList[0].innerHTML = '';
        document.getElementById('note-list').innerHTML = '';

        displayNotes();
    })
}

export function submitProjectText(elementId, elementClass) {
    document.getElementById(elementId).addEventListener('click', (e) => {
        const formList = document.getElementsByClassName(elementClass);
        e.preventDefault();
        const formText = formList[0].elements[0].value;
        projectList.push(new Project(formText));
        formList[0].innerHTML = '';
        document.getElementById('project-list').innerHTML = '';

        projectRender();
    });
};