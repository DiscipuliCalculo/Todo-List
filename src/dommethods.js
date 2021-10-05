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

export function createButton(text, div) {
    const newDiv = document.createElement('div');
    newDiv.className = "button-div"
    newDiv.innerHTML = `
    <button class="create-button">${text}</button>
    `
    document.getElementById(div).appendChild(newDiv)
};

export function clearProjects () {
    document.getElementById('project-list').innerHTML = '';
};

export function createForm (parent, formClass) {
    const newForm = document.createElement('form');
    newForm.className = formClass
    newForm.innerHTML = `
    <textarea class="note-text"></textarea>
    <button class="submit-button">Add</button>
    <button class="cancel-button">Cancel<button>
    `
    document.getElementById(parent).appendChild(newForm);
}

export function appendElement(existing, newElement) {
    document.getElementById(existing).appendChild(newElement);
}