import { createNewTask } from "./index";

export function display(project) {
    const tasks = project.getTasks();
    const divTasksContainer = generateProjectTitle(project.projName);
    tasks.forEach((task, index) => {
        generateTask(task, divTasksContainer, index, project);
    });
    
}

export function generateContentContainer() {
    const divContent = document.createElement("div");
    divContent.id = "content";
    document.body.appendChild(divContent);
}

function generateProjectTitle(title) {
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


    removeBtn.addEventListener("click", () => {
        removeTaskCard(card, index, project);
    }); 
}

function removeTaskCard (card, index, project) {
    card.remove();
    project.removeTask(index);
};

export function clearContent () {
    document.querySelector("#content").remove();
}

//event listeners
document.querySelector("#dialog-cancel-btn").addEventListener("click", () => {
    document.querySelector("dialog").close();
});

document.querySelector("#add-task-form").addEventListener("submit", createNewTask);