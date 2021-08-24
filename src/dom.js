import { todoModule } from "./todo";

const displayController = (() => {
    const main = document.querySelector(".main");

    const addTodoBtn = document.querySelector("#addTodoBtn");

    // TODO
    const todoContainer = document.querySelector("#todoContainer");
    const enterAddTodoBtn = document.querySelector("#enterAddTodoBtn");
    const addTodoForm = document.querySelector(".addTodoForm");

    enterAddTodoBtn.addEventListener("click", enterAddTodo);
    addTodoBtn.addEventListener("click", openAddTodoForm);

    function enterAddTodo() {
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

        todoContainer.innerHTML = "";

        todos.forEach(element => {
            const todo = document.createElement("div");
            todo.classList.add("todo");

            const todoText = document.createElement("p");
            todoText.setAttribute("id", "todoText");
            todoText.textContent = element.title + ": " + element.description;

            const deleteLogo = document.createElement("span");
            deleteLogo.setAttribute("id", "deleteLogo");
            deleteLogo.classList.add("material-icons-outlined");
            deleteLogo.textContent="remove_circle_outline";

            todo.appendChild(todoText);
            todo.appendChild(deleteLogo);
            todoContainer.appendChild(todo);
        });
    }

    return { loadInbox }

})();

export {displayController}