import { Project, addProject, Note, submitNoteText } from "./notemethods.js"
import { createDiv, createButton, clearProjects, createForm } from "./dommethods.js"
import { projectRender } from "./render.js"
import { createProject, createNote } from "./logic"

projectRender();
createProject();

createButton('Create Note', 'note-list', 'create-note');
createNote();

