import { todo } from "./todo";
import { dom } from "./dom";

const project = (() => {

    let projects = ["Programming", "Animals"];

    const addProjectBtn = document.querySelector("#addProjectBtn");
    const newProjectWrapper = document.querySelector(".newProjectWrapper");
    const projectContainer = document.querySelector(".projectContainer")


    addProjectBtn.addEventListener("click", () => { 
        openNewProjectForm() 
        enterAddProject = document.querySelector("#enterAddProject");
    });

    const openNewProjectForm = () => {
        newProjectWrapper.classList.add("active")
    }

    const closeNewProjectForm = () => {
        newProjectWrapper.classList.remove("active")
    }

    if(enterAddProject !== null) { enterAddProject.addEventListener("click", () => { addProject() }); }

    const addProject = () => {
        const newProjectInput = document.querySelector("#newProjectInput");
        if(projects.includes(newProjectInput.value)) {
            alert("Names of the projects must be different")
            return;
        }
        projects.push(newProjectInput.value)
        showProjects();
        closeNewProjectForm();
    }

    const showProjects = () => {
        projectContainer.innerHTML = "";
        projects.forEach(project => {
            const projectDiv = document.createElement("div");
            projectDiv.classList.add("projectDiv")

            const projectTitle = document.createElement("p");
            projectTitle.setAttribute("id", "projectTitle")
            projectTitle.textContent = project;

            const deleteProjectBtn = document.createElement("span");
            deleteProjectBtn.setAttribute("id", "projectsDeleteLogo");
            deleteProjectBtn.classList.add("material-icons");
            deleteProjectBtn.textContent = "remove_circle_outline";

            projectDiv.appendChild(projectTitle);
            projectDiv.appendChild(deleteProjectBtn);
            projectContainer.appendChild(projectDiv)
        });
        let deleteProjectBtn = document.querySelectorAll("#projectsDeleteLogo");
        deleteProjectBtn.forEach(element => {
            element.addEventListener("click", (e) => { deleteProject(e) });
        });

        let projectBtns = document.querySelectorAll("#projectTitle");
        projectBtns.forEach(element => {
            element.addEventListener("click", (e) => { loadProject(e) });
        });
    }

    const deleteProject = (e) => {
        let pos = projects.indexOf(e.target.parentElement.childNodes[0].textContent);
        projects.splice(pos, 1);
        showProjects();
    }

    const loadProject = (e) => {

        const mainHeader = document.querySelector("#mainHeader");
        mainHeader.textContent = e.target.textContent

        let todos = todo.todos.filter((todo) => { 
            if(todo.project == e.target.textContent) return todo
        })
        console.log(todos)
        dom.showTodos(todos, "a")
    }

    return {showProjects}

})();

export { project }