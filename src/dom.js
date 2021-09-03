import { todoModule } from "./todo";
import isToday from 'date-fns/isToday';
import isThisWeek from 'date-fns/isThisWeek';

const displayController = (() => {
    // SIDEBAR
    const inbox = document.querySelector("#sidebarInbox");
    const today = document.querySelector("#sidebarToday");
    const week = document.querySelector("#sidebarWeek");
    const newTodoBtn = document.querySelector("#addTodoBtn");

    // TODO
    const todoContainer = document.querySelector("#todoContainer");
    const addTodoBtn = document.querySelector("#enterAddTodoBtn");
    const addTodoForm = document.querySelector(".addTodoForm");

    // MAIN
    const mainHeader = document.querySelector("#mainHeader")

    function addTodo() {
        const titleInput = document.querySelector("#titleInput")
        const descriptionInput = document.querySelector("#descriptionInput")
        const duedateInput = document.querySelector("#duedateInput")
        const projectInput = document.querySelector("#projectInput");
        const priorityInput = document.querySelector("#priorityInput");

        addTodoForm.classList.remove("active");
        todoModule.addTodo(titleInput.value, descriptionInput.value, duedateInput.value, projectInput.value, priorityInput.value);
        loadInbox(todoModule.todos);
    }

    function openAddTodoForm() {
        addTodoForm.classList.add("active")
    }

    const loadInbox = (todos) => {
        mainHeader.textContent = "Inbox"
        todoContainer.innerHTML = "";

        todos.forEach(element => {
            showTodos(element)
        });
        deleteEvent("Inbox");
    }

    const loadToday = (todos) => {
        mainHeader.textContent = "Today"
        todoContainer.innerHTML = "";
        todos.forEach(element => {
            if(isToday(new Date(element.duedate))){
                showTodos(element)
            }
        });
        deleteEvent("Today");
    }

    const loadThisWeek = (todos) => {
        mainHeader.textContent = "This week";
        todoContainer.innerHTML = "";

        todos.forEach(element => {
            if(isThisWeek(new Date(element.duedate))){
                showTodos(element)
            }
        })
        deleteEvent("Week");
    }

    const showTodos = (element) => {
        const todo = document.createElement("div");
        todo.classList.add("todo");

        const todoText = document.createElement("p");
        todoText.setAttribute("id", "todoText");
        todoText.textContent = element.title + " - Due: " + element.duedate;          

        const deleteLogo = document.createElement("span");
        deleteLogo.setAttribute("id", "deleteBtn");
        deleteLogo.classList.add("material-icons-outlined");
        deleteLogo.textContent="remove_circle_outline";

        todo.appendChild(todoText);
        todo.appendChild(deleteLogo);
        todoContainer.appendChild(todo);
    }

    const deleteEvent = (origin) => {
        const deleteBtns = document.querySelectorAll("#deleteBtn");

        deleteBtns.forEach(element => {
            element.addEventListener("click", (e) => {
                todoModule.deleteTodo(e);

                if(origin == "Inbox") {
                    loadInbox(todoModule.todos)
                } else if(origin == "Today"){
                    loadToday(todoModule.todos)
                } else if(origin == "Week"){
                    loadThisWeek(todoModule.todos)
                }
            })
        });
    }


    addTodoBtn.addEventListener("click", addTodo);
    newTodoBtn.addEventListener("click", openAddTodoForm);
    inbox.addEventListener("click", () => { loadInbox(todoModule.todos) })
    today.addEventListener("click", () => { loadToday(todoModule.todos) })
    week.addEventListener("click", () => { loadThisWeek(todoModule.todos) })

    return { loadInbox, deleteEvent }

})();

export {displayController}