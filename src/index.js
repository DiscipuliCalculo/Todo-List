import { Project } from "./notemethods.js"
import { addProject } from "./notemethods.js";
import * as domMethods from "./dommethods.js"
import { createDiv } from "./dommethods.js"

let projectList = [];
let defaultProject = new Project("default")
let project2 = new Project('2');
let project3 = new Project('3')
addProject(projectList, defaultProject);
addProject(projectList, project2);
addProject(projectList, project3);
console.log(projectList);

for (let i = 0; i < projectList.length; i++) {
    let newDiv = createDiv(projectList[i].name);
    const shownProjects = document.getElementById('project-list');
    shownProjects.appendChild(newDiv);
};