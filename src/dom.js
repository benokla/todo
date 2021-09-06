import { todo } from "./todo"
import isThisWeek from 'date-fns/isThisWeek'
import isToday from 'date-fns/isToday'

const dom = (() => {
    const mainHeader = document.querySelector("#mainHeader");
    const addTodoBtnContainer = document.querySelector(".addTodoBtnContainer");
    let enterAddTodoBtn = document.querySelector("#enterAddTodoBtn");
    const expandTodoDiv = document.querySelector(".expandTodo")

    const addTodoForm = document.querySelector(".addTodoForm");
    const todoContainer = document.querySelector("#todoContainer")
    // SIDEBAR
    const sidebarInbox = document.querySelector("#sidebarInbox")
    const sidebarToday = document.querySelector("#sidebarToday")
    const sidebarWeek = document.querySelector("#sidebarWeek")

    
    sidebarInbox.addEventListener("click", () => { loadInbox() });
    sidebarToday.addEventListener("click", () => { loadToday() });
    sidebarWeek.addEventListener("click", () => { loadWeek() });

    const openAddTodoForm = () => {
        addTodoForm.classList.add("active")
        enterAddTodoBtn = document.querySelector("#enterAddTodoBtn"); 
    }

    if(enterAddTodoBtn !== null) {
        enterAddTodoBtn.addEventListener("click", () => {
            addTodo();
            loadInbox();
            closeAddTodoForm();
        })   
    }

    const addTodo = () => {
        const titleInput = document.querySelector("#titleInput");
        const descriptionInput = document.querySelector("#descriptionInput");
        const dueDateInput = document.querySelector("#dueDateInput");
        const priorityInput = document.querySelector("#priorityInput");
        const projectInput = document.querySelector("#projectInput");
        todo.addTodo(titleInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value, projectInput.value)
    }

    const closeAddTodoForm = () => {
        addTodoForm.classList.remove("active")
    }

    const loadInbox = () => {
        addTodoBtnContainer.innerHTML = "";
        mainHeader.textContent = "Inbox"
        showTodos(todo.todos, "inbox");

        const addTodoBtn = document.createElement("h2");
        addTodoBtn.textContent = "+ Add Todo";
        addTodoBtn.setAttribute("id", "addTodoBtn")
        addTodoBtnContainer.appendChild(addTodoBtn)

        addTodoBtn.addEventListener("click", () => { 
            openAddTodoForm() 
        })    
    }

    const loadToday = () => {
        mainHeader.textContent = "Today"
        showTodos(todo.todos, "today")
    }

    const loadWeek = () => {
        mainHeader.textContent = "This week"
        showTodos(todo.todos, "week")
    }

    const deleteTodo = (e, arg) => {
        todo.todos = todo.deleteTodo(e);

        if(arg == "week") {
            loadWeek();
        } else if(arg == "today"){
            loadToday();
        } else {
            loadInbox();
        }
    }

    const showTodos = (todos, arg) => {
        todoContainer.innerHTML = " "

        if(arg=="week"){
            todos = todos.filter(todo => { return isThisWeek(new Date(todo.dueDate)) })
        } else if(arg=="today"){
            todos = todos.filter(todo => { return isToday(new Date(todo.dueDate)) })
        }

        todos.forEach(element => {
            const todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");

            const todoText = document.createElement("p");
            todoText.classList.add("todoText")
            todoText.textContent = `${element.title} - Due: ${element.dueDate}`

            const deleteBtn = document.createElement("span");
            deleteBtn.setAttribute("id", "deleteLogo");
            deleteBtn.classList.add("material-icons");
            deleteBtn.textContent = "remove_circle_outline";

            todoDiv.appendChild(todoText)
            todoDiv.appendChild(deleteBtn)
            todoContainer.appendChild(todoDiv)

            if(deleteBtn !== null) {
                deleteBtn.addEventListener("click", (e) => { deleteTodo(e, arg) });
            }  
        });    
        
        expandTodoEvent()
    }

    const expandTodoEvent = () => {
        const todos = document.querySelectorAll(".todoText");
        todos.forEach(todo => {
            todo.addEventListener("click", (e) => { expandTodo(e)})
        });
    }

    const expandTodo = (e) => {
        let clickedTodoArray = todo.todos.filter((todo) => {
            if(`${todo.title} - Due: ${todo.dueDate}` == e.target.textContent){
                return todo;
            }
        })
        let todoTitlesArray = todo.todos.map((todo) => { return todo.title })
        let pos = todoTitlesArray.indexOf(clickedTodoArray[0].title);

       expandTodoDiv.classList.add("active")

       const expandTitleInput = document.querySelector("#expandTitleInput");
       const expandDescriptionInput = document.querySelector("#expandDescriptionInput");
       const expandDueDateInput = document.querySelector("#expandDueDateInput");
       const expandPriorityInput = document.querySelector("#expandPriorityInput");
       const expandProjectInput = document.querySelector("#expandProjectInput");

       expandTitleInput.value = todo.todos[pos].title;
       expandDescriptionInput.value = todo.todos[pos].description;
       expandDueDateInput.value = todo.todos[pos].dueDate;
       expandPriorityInput.value = todo.todos[pos].priority;
       expandProjectInput.value = todo.todos[pos].project;

       let enterUpdateTodoBtn = document.querySelector("#enterUpdateTodoBtn")
       enterUpdateTodoBtn.addEventListener("click", () => {
            todo.todos.splice(pos, 1);
            todo.addTodo(expandTitleInput.value, expandDescriptionInput.value, expandDueDateInput.value, expandPriorityInput.value,  expandProjectInput.value)
            loadInbox();
            expandTodoDiv.classList.remove("active")
    })  
    }

    return { showTodos, loadInbox }
})();

export { dom }