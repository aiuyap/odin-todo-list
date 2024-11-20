import "./styles.css";
import { Tasks } from "./tasks";
import { Projects } from "./projects";
import { display, generateContentContainer, clearContent } from "./displayController";

const projectList = [];
const defaultProject = Projects("Current Tasks");
projectList.push(defaultProject);

(function preLoad () {
    const newTask = Tasks("Water", "Water all the plants", "12/12/1922", "High Priority", false);
    
    defaultProject.addTaskToProject(newTask);
    const newTask2 = Tasks("Test", "Water all the plants", "12/12/1922", "High Priority", false);
    defaultProject.addTaskToProject(newTask2);

    const newProject2 = Projects("Test");

    newProject2.addTaskToProject(newTask);

    generateContentContainer();
    display(defaultProject);

    document.querySelector("dialog").showModal();
    
})();

function createNewTask () {
    const title = document.querySelector("#new-title").value;
    const desc = document.querySelector("#new-desc").value;
    const date = document.querySelector("#new-date").value;
    const prio = document.querySelector("#new-priority").value;

    const task = Tasks(title, desc, date, prio, false);
    defaultProject.addTaskToProject(task);

    clearContent();
    generateContentContainer();
    display(defaultProject);
}

//event listeners
document.querySelector("#dialog-cancel-btn").addEventListener("click", () => {
    document.querySelector("dialog").close();
});

document.querySelector("#add-task-form").addEventListener("submit", createNewTask);
