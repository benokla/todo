import { todo } from "./todo"

const UI = (() => {
    // cache DOM
    const openAddTodoFormBtn = document.querySelector("#openAddTodoFormBtn")
    const addTodoForm = document.querySelector("#addTodoForm")
    const addTodoBtn = document.querySelector("#addTodoBtn")
    const todoContainer = document.querySelector("#todoContainer")
    const inbox = document.querySelector("#inbox")
    const today = document.querySelector("#today")
    const week = document.querySelector("#week")
    const header = document.querySelector("#header")

    // bind events
    openAddTodoFormBtn.addEventListener("click", openAddTodoForm)
    addTodoBtn.addEventListener("click", () => { 
        addTodo()
        closeAddTodoForm()
        showTodos() })

    function openAddTodoForm() {
        addTodoForm.classList.add("active");
    }

    function todoEvent() {
        const deleteBtns = document.querySelectorAll(".deleteBtn");
        deleteBtns.forEach(deleteBtn => {
            deleteBtn.addEventListener("click", (e) => { deleteTodo(e) });
        });
    }

    function deleteTodo(e) {
        todo.deleteTodo(+e.target.parentNode.dataset.index);
        showTodos()
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

    function showTodos() {
        todoContainer.innerHTML = "";

        let todos = todo.getTodos();
        todos.forEach((element) => {
            const todo = document.createElement("div");
            todo.dataset.index = element.id;
            todo.classList.add("todo")

            const todoText = document.createElement("p");
            todoText.textContent = `Title: ${element.title} - Due: ${element.dueDate}`
            todoText.classList.add("todoText")

            const deleteBtn = document.createElement("input")
            deleteBtn.setAttribute("type", "button")
            deleteBtn.value = "Delete"
            deleteBtn.classList.add("deleteBtn")

            const editBtn = document.createElement("input")
            editBtn.setAttribute("type", "button");
            editBtn.value = "Edit"
            editBtn.classList.add("editBtn")

            todo.appendChild(todoText)
            todo.appendChild(deleteBtn)
            todo.appendChild(editBtn)
            todoContainer.appendChild(todo)
        })

        // cache DOM
        todoEvent();
    }

    todo.addTodo("Title1", "Desc1", "DUedAte1", "medium", "project1", todo.getId())
    showTodos()
})();

export { UI }