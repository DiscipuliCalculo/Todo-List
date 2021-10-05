import { Project } from "./notemethods.js"
import { addProject } from "./notemethods.js";
import * as domMethods from "./dommethods.js"
import { createDiv } from "./dommethods.js"
import {createButton} from "./dommethods"
import { clearProjects } from "./dommethods.js"
import { createForm } from "./dommethods.js"
let i = 1;
let projectList = [];
let defaultProject = new Project("default")
addProject(projectList, defaultProject);
console.log(projectList);

for (let i = 0; i < projectList.length; i++) {
    let newDiv = createDiv(projectList[i].name);
    const shownProjects = document.getElementById('project-list');
    shownProjects.appendChild(newDiv);
};

createButton('Create Project', 'project-list');
createButton('Create Note', 'note-list')

document.querySelector('button').addEventListener('click', (e) => {
    const classList1 = document.getElementsByClassName('button-div')
    classList1[0].innerHTML = `<form class="form1">
    <textarea class="note-text"></textarea>
    <button id="proj-submit" class="submit-button">Add</button>
    <button id="proj-cancel" class="cancel-button">Cancel</button>
    </form>
    `

    document.getElementById('proj-cancel').addEventListener('click', (e) => {
        const formList = document.getElementsByClassName('form1')
        e.preventDefault() 
        formList[0].innerHTML = ''
    })

    document.getElementById('proj-submit').addEventListener('click', (e) => {
        const formList = document.getElementsByClassName('form1')
        e.preventDefault() 
        const formText = formList[0].elements[0].value
        console.log(formText);
        addProject(projectList, new Project(formText));
        formList[0].innerHTML = '';
        clearProjects();
        console.log(projectList)

        for (let i = 0; i < projectList.length; i++) {
            let newDiv = createDiv(projectList[i].name);
            const shownProjects = document.getElementById('project-list');
            shownProjects.appendChild(newDiv);
        };

        createButton('Create Project', 'project-list');
    })
    //console.log(classList1)
})

/*
for (let i = 0; i < projectList[selected]['notes'].length; i++) {
    let newDiv = createDiv(projectList[selected]['notes'][i].description);
    const shownNotes = document.getElementById('note-list');
    shownNotes.appendChild(newDiv);
};
*/