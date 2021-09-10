import { store } from "./store";

const todo = (() => {
    let id = 0;

    let todos = [];

    function Todo(title, description, dueDate, priority, project, id) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.id = id;
    }

    Todo.prototype.updateTodo = function(newTitle, newDescription, newDueDate, newPriority, newProject){
        this.title = newTitle;
        this.description = newDescription;
        this.dueDate = newDueDate;
        this.priority = newPriority;
        this.project = newProject;
    }

    function addTodo(title, description, dueDate, priority, project, id) {
        const todo = new Todo(title, description, dueDate, priority, project, id);
        todos.push(todo);
        store.save()
        let a = localStorage.getItem('todos');
    }

    function getTodos() {
        return todos;
    }

    function getId() {
        return id++;
    }

    function getTodo(index) {
        let todoIds = todos.map((todo) => { return todo.id });
        let pos = todoIds.indexOf(index);
        return todos[pos];
    }

    function deleteTodo(index){
        let todoIds = todos.map((todo) => { return todo.id });
        let pos = todoIds.indexOf(index);
        todos.splice(pos, 1);
        store.save()
    }

    function setTodos(array) {
        todos = array;
    }

    return { getId, getTodos, addTodo, getTodo, deleteTodo, setTodos}
})();

export { todo }