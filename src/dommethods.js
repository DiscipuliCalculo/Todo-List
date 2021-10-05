//import { displayProjects } from "./notemethods";
//import { projectRender  } from "./render";
//import { addProject, Project } from "./notemethods";

export function createDiv(text) {
    const newDiv = document.createElement('div');
    newDiv.textContent = text;
    return newDiv;
};

export function selectDiv(div) {
    document.getElementById(div).addEventListener("click", (e) => {
        return e.currentTarget;
    })
};

export function createButton(text, divName, idName) {
    const newDiv = document.createElement('div');
    newDiv.id = idName
    newDiv.innerHTML = `
    <button class="create-button">${text}</button>
    `
    document.getElementById(divName).appendChild(newDiv)
};

export function clearProjects () {
    document.getElementById('project-list').innerHTML = '';
};

export function createForm (Id, formClass, submitId, cancelId) {
    //const newForm = document.createElement('form');
    //newForm.className = formClass
    const getId = document.getElementById(Id);
    getId.innerHTML = `<form class="${formClass}">
    <textarea class="note-text"></textarea>
    <button id="${submitId}" class="submit-button">Add</button>
    <button id="${cancelId}" class="cancel-button">Cancel</button>
    </form>
    `
    //document.getElementById(parent).appendChild(newForm);
}

export function appendElement(existing, newElement) {
    document.getElementById(existing).appendChild(newElement);
};