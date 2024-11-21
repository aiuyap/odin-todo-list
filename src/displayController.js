import { createNewTask, getAllProjectList } from "./index";

export function display(project) {
    const tasks = project.getTasks();
    const divTasksContainer = generateTitle(project.projName);
    generateAddTaskButton(divTasksContainer);
    tasks.forEach((task, index) => {
        generateTask(task, divTasksContainer, index, project);
    });
    
}

export function generateContentContainer() {
    const divContent = document.createElement("div");
    divContent.id = "content";
    document.body.appendChild(divContent);
}

function generateTitle(title) {
    const divContent = document.querySelector("#content");
    const divTitle = document.createElement("div");
    divTitle.classList.add("title");
    divContent.appendChild(divTitle);

    const h1Title = document.createElement("h1");
    divTitle.appendChild(h1Title);
    h1Title.textContent = title;

    const divTasksContainer = document.createElement("div");
    divTasksContainer.classList.add("tasks-container");
    divContent.appendChild(divTasksContainer);

    return divTasksContainer;
}

function generateTask(task, divTasksContainer, index, project) {
    const card = document.createElement("div");
    card.classList.add("tasks-card");
    divTasksContainer.appendChild(card);

    const title = document.createElement("h3");
    title.classList.add("tasks-title");
    card.appendChild(title);
    title.textContent = task.title;

    const desc = document.createElement("div");
    desc.classList.add("tasks-desc");
    card.appendChild(desc);
    desc.textContent = task.description;

    const dueDate = document.createElement("div");
    dueDate.classList.add("tasks-due");
    card.appendChild(dueDate);
    dueDate.textContent = `Due: ${task.dueDate}`;

    const prio = document.createElement("div");
    prio.classList.add("tasks-prio");
    card.appendChild(prio);
    prio.textContent = task.priority;

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("tasks-complete");
    completeBtn.textContent = "Complete";
    card.appendChild(completeBtn);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("tasks-rmv");
    removeBtn.textContent = "Remove";
    card.appendChild(removeBtn);

// Rmv and complete btn event listener
    removeBtn.addEventListener("click", () => {
        removeTaskCard(card, index, project);
    }); 

    completeBtn.addEventListener("click", () => {
        completeTask(task, completeBtn);
    });
}

function completeTask (task, completeBtn) {
    task.isComplete = true;
    completeBtn.disabled = true;
    completeBtn.classList.add("tasks-done-btn");
    completeBtn.textContent = "Completed!";
}

function removeTaskCard (card, index, project) {
    card.remove();
    project.removeTask(index);
};

export function clearContent () {
    document.querySelector("#content").remove();
}

export function generateAddTaskButton (divTasksContainer) {
    const card = document.createElement("div");
    card.classList.add("tasks-card");
    card.id = "add-btn-card";
    divTasksContainer.appendChild(card);

    const addBtn = document.createElement("button");
    addBtn.textContent = "+ New Task";
    addBtn.id = "add-btn";
    card.appendChild(addBtn);

    addBtn.addEventListener("click", () => {
        document.querySelector("dialog").showModal();
    })
}


(function addingEventListenerModule () {
    //Add Task event listeners
    document.querySelector("#dialog-cancel-btn").addEventListener("click", () => {
        document.querySelector("dialog").close();
    });
    
    document.querySelector("#add-task-form").addEventListener("submit", createNewTask);
    //Task and Projects navbar event listeners
    document.querySelector("#view-projects").addEventListener("click", () => {
        clearContent();
        generateContentContainer();
        displayAllProjects ();
        
    });
})();

export function displayAllProjects () {
    const AllProjects = getAllProjectList();
    const divTasksContainer = generateTitle("All Projects");
    
    AllProjects.forEach((proj, index) => {
        generateProjectCards(divTasksContainer, proj, index, AllProjects);
    });
}

function generateProjectCards (divTasksContainer, proj, index, AllProjects) {
    const card = document.createElement("div");
    card.classList.add("proj-card");
    divTasksContainer.appendChild(card);

    const title = document.createElement("h3");
    title.classList.add("tasks-title");
    card.appendChild(title);
    title.textContent = proj.projName;

    const viewBtn = document.createElement("button");
    viewBtn.textContent = "View Project";
    card.appendChild(viewBtn);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    card.appendChild(removeBtn);

    // View and Rmv event listeners
    removeBtn.addEventListener("click", () => {
        removeProject(card, AllProjects, index);
    })
}

function removeProject (card, AllProjects, index) {
    card.remove();
    AllProjects.splice(index, 1);
}
