import { createForm } from "./dommethods"
import { cancelText, submitNoteText, submitProjectText } from "./notemethods"
import { projectRender } from "./render"

export function createProject() {

    document.querySelectorAll('button')[0].addEventListener('click', (e) => { 
        createForm('create-project','project-form', 'proj-submit', 'proj-cancel');
        cancelText('proj-cancel', 'project-form');
        submitProjectText('proj-submit', 'project-form');
    });
};

export function createNote() {
    
    document.querySelectorAll('button')[1].addEventListener('click', (e) => {
    createForm('create-note', 'note-form', 'note-submit', 'note-cancel');
    cancelText('note-cancel', 'note-form');
    submitNoteText('note-submit', 'note-form');
    });
};