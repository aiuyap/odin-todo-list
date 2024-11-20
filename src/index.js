import "./styles.css";
import { Tasks } from "./tasks";
import { Projects } from "./projects";
import { display, generateContentContainer } from "./displayController";


(function main () {
    const newTask = Tasks("Water", "Water all the plants", "12/12/1922", "High Priority", false);
    const newProject = Projects("Current Tasks");
    newProject.addTaskToProject(newTask);

    const newTask2 = Tasks("Test", "Water all the plants", "12/12/1922", "High Priority", false);
    newProject.addTaskToProject(newTask2);

    const newProject2 = Projects("Test");

    newProject2.addTaskToProject(newTask);

    generateContentContainer();
    display(newProject);
    display(newProject2);
})();
