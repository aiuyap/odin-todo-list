import "./styles.css";
import { display, generateContentContainer, clearContent } from "./displayController";

const projectList = [];
const defaultProject = Projects("Current Tasks");
projectList.push(defaultProject);

(function initialLoad () {
    const newTask = Tasks("Water", "Water all the plants", "12/12/1922", "High Priority", false);
    defaultProject.addTaskToProject(newTask);
    const newTask2 = Tasks("Test", "Water all the plants", "12/12/1922", "High Priority", false);
    defaultProject.addTaskToProject(newTask2);

    const testProj = Projects("Test");
    projectList.push(testProj);

    generateContentContainer();
    display(defaultProject);
})();

function Projects (projName) {
    const allTasks = [];

    function addTaskToProject (newTask) {
        allTasks.push(newTask);
    }

    function getTasks () {
        return allTasks;
    }

    function removeTask (index) {
        allTasks.splice(index, 1);
    }

    return {projName, addTaskToProject, getTasks, removeTask};
}

function Tasks (title, description, dueDate, priority, isComplete) {
    return {title, description, dueDate, priority, isComplete};
}

export function createNewTask (project) {
    const title = document.querySelector("#new-title").value;
    const desc = document.querySelector("#new-desc").value;
    const date = document.querySelector("#new-date").value;
    const prio = document.querySelector("#new-priority").value;

    const task = Tasks(title, desc, date, prio, false);
    project.addTaskToProject(task);

    clearContent();
    generateContentContainer();
    display(project);
}

export function getAllProjectList () {
    return projectList;
}

export function addNewProjectToArr(newProjName) {
    const newProject = Projects(newProjName);
    projectList.push(newProject);
}




