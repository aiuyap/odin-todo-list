export function Projects (projName) {
    const allTasks = [];

    function addTaskToProject (newTask) {
        allTasks.push(newTask);
    }

    function getTasks () {
        return allTasks;
    }
    return {projName, addTaskToProject, getTasks};
}