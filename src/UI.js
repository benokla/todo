import { todo } from "./todo"
import isToday from 'date-fns/isToday'
import isThisWeek from 'date-fns/isThisWeek'
import { project } from "./project";
import { store } from "./store";

const UI = (() => {
    let curTodo;
    // cache DOM
    const openAddTodoFormBtn = document.querySelector("#openAddTodoFormBtn")
    const addTodoForm = document.querySelector("#addTodoForm")
    const addTodoBtn = document.querySelector("#addTodoBtn")
    const todoContainer = document.querySelector("#todoContainer")
    const inbox = document.querySelector("#inbox")
    const today = document.querySelector("#today")
    const week = document.querySelector("#week")
    const header = document.querySelector("#header")
    const editTodoForm = document.querySelector("#editTodoForm")
    const saveTodoBtn = document.querySelector("#saveTodoBtn")
    const newProjectBtn = document.querySelector("#newProjectBtn")
    const projectInput = document.querySelector("#projectsInput")
    const projects = document.querySelector("#projects")
    // cache DOM Edit
    const editTitle = document.querySelector("#editTitleInput");
    const editDescription = document.querySelector("#editDescriptionInput");
    const editDueDate = document.querySelector("#editDueDateInput");
    const editPriority = document.querySelector("#editPriorityInput");
    const editProject = document.querySelector("#editProjectInput");


    // bind events
    openAddTodoFormBtn.addEventListener("click", openAddTodoForm);
    inbox.addEventListener("click", loadInbox)
    today.addEventListener("click", loadToday)
    week.addEventListener("click", loadWeek)
    saveTodoBtn.addEventListener("click", () => { saveTodo() })
    newProjectBtn.addEventListener("click", () => {
        addProject();
        displayProjects();
    })
    addTodoBtn.addEventListener("click", () => { 
        addTodo()
        closeAddTodoForm()
        showTodos(getHeader() ) })

    function todoEvent(arg) {
        const deleteBtns = document.querySelectorAll(".deleteBtn");
        deleteBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener("click", (e) => { deleteTodo(e, arg) });
        });

        const editBtns = document.querySelectorAll(".editBtn");
        editBtns.forEach(editBtn => {
            editBtn.addEventListener("click", (e) => { editTodo(e) })
        })
    }
    function projectEvent() {
        const projectTitles = document.querySelectorAll(".projectTitle");
        projectTitles.forEach(element => {
            element.addEventListener("click", (e) => { loadProject(e) })
        });
        const deleteProjectsBtn = document.querySelectorAll(".deleteProjectsBtn")
        deleteProjectsBtn.forEach(element => {
            element.addEventListener("click", (e) => { deleteProject(e)})
        });
    }

    // functions 

    function deleteProject(e) {
        project.deleteProject(project.getProject(e.target.parentNode.dataset.index))
        displayProjects();
    }

    function loadProject(e) {
        header.textContent = project.getProject(e.target.parentNode.dataset.index)
        showTodos(project.getProject(e.target.parentNode.dataset.index))
    }

    function addProject() {
        if(projectInput.value=="") return;
        project.addProject(projectInput.value);
        projectInput.value = "";
        displayProjects();

    }
    function displayProjects() {
        projects.innerHTML = "";

        let projectArray = project.getProjects();
        projectArray.forEach(element => {
            const eachProject = document.createElement("div");
            eachProject.classList.add("eachProject")
            eachProject.dataset.index = projectArray.indexOf(element)

            const projectTitle = document.createElement("p");
            projectTitle.classList.add("projectTitle");
            projectTitle.textContent = element;

            const deleteProjectBtn = document.createElement("span");
            deleteProjectBtn.classList.add("deleteProjectsBtn")
            deleteProjectBtn.classList.add("material-icons-outlined")
            deleteProjectBtn.textContent = "remove"

            eachProject.appendChild(projectTitle);
            eachProject.appendChild(deleteProjectBtn);
            projects.appendChild(eachProject)

        });
        projectEvent();
    }



    function saveTodo() {
        console.log(curTodo)
        curTodo.updateTodo(editTitle.value, editDescription.value, editDueDate.value, editPriority.value, editProject.value);
        showTodos(getHeader() )
        closeEditTodoForm();
        store.save();
    }

    function editTodo(e) {
        const theTodo = todo.getTodo(+e.target.parentNode.parentNode.dataset.index);
        curTodo = theTodo;
        openEditTodoForm();

        editTitle.value = theTodo.title;
        editDescription.value = theTodo.description;
        editDueDate.value = theTodo.dueDate;
        editPriority.value = theTodo.priority;
        editProject.value = theTodo.project;
    }

    function openEditTodoForm() {
        editTodoForm.classList.add("active")
    }

    function closeEditTodoForm() {
        editTodoForm.classList.remove("active")
    }

    function deleteTodo(e, arg) {
        todo.deleteTodo(+e.target.parentNode.dataset.index);
        if(arg=="inbox") {
            loadInbox();
        } else if(arg=="today"){
            loadToday();
        } else if(arg=="week") {
            loadWeek();
        }
    }

    function getHeader() {
        const headerText = header.textContent;
        if(headerText=="inbox"){
            return "inbox";
        } else if(headerText == "today") {
            return "today"
        } else if(headerText == "week") {
            return "week"
        } else {
            return "inbox"
        }
    }

    function loadInbox() {
        header.textContent = "Inbox"
        showTodos("inbox")
    }

    function loadToday(){
        header.textContent = "Today"
        showTodos("today")
    }
    
    function loadWeek(){
        header.textContent = "Week"
        showTodos("week")
    }

    function openAddTodoForm() {
        addTodoForm.classList.add("active");
    }

    function closeAddTodoForm() {
        addTodoForm.classList.remove("active");
    }

    function addTodo() {
        const titleInput = document.querySelector("#titleInput").value;
        const descriptionInput = document.querySelector("#descriptionInput").value;
        const dueDateInput = document.querySelector("#dueDateInput").value;
        const priorityInput = document.querySelector("#priorityInput").value;
        const projectInput = document.querySelector("#projectInput").value;

        todo.addTodo(titleInput, descriptionInput, dueDateInput, priorityInput, projectInput, todo.getId())
    }

    function showTodos(arg) {
        todoContainer.innerHTML = "";

        let todos = todo.getTodos();

        if(arg != "today" && arg != "inbox" && arg != "week") {
            todos = todos.filter((todo) => {
                if(todo.project == arg) return todo
            })
        }

        if(arg=="today"){
            todos = todos.filter((todo) => {
                if(isToday(new Date(todo.dueDate))){ return todo }
            })
        } else if(arg=="week"){
            todos = todos.filter((todo) => {
                if(isThisWeek(new Date(todo.dueDate))){ return todo }
            })
        }

        todos.forEach((element) => {
            const todo = document.createElement("div");
            todo.dataset.index = element.id;
            todo.classList.add("todo")

            const todoText = document.createElement("p");
            todoText.textContent = `${element.title} - Due: ${element.dueDate}`
            todoText.classList.add("todoText")

            const deleteBtn = document.createElement("span")
            deleteBtn.textContent = "clear"
            deleteBtn.classList.add("deleteBtn")
            deleteBtn.classList.add("material-icons-outlined")

            const editBtn = document.createElement("span")
            editBtn.classList.add("editBtn")
            editBtn.textContent = "edit"
            editBtn.classList.add("material-icons-outlined")
            

            const editDeleteContainer = document.createElement("div")
            editDeleteContainer.classList.add("editDeleteContainer")

            editDeleteContainer.appendChild(deleteBtn)
            editDeleteContainer.appendChild(editBtn)
            todo.appendChild(todoText)
            todo.appendChild(editDeleteContainer)

            todoContainer.appendChild(todo)
        })
        // cache DOM
        todoEvent(arg);
    }

    return  { showTodos , displayProjects}
})();

export { UI }