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

    function addTodo(title, description, dueDate, priority, project, id) {
        const todo = new Todo(title, description, dueDate, priority, project, id);
        todos.push(todo);
        console.log(todos)
    }

    function getTodos() {
        return todos;
    }

    function getId() {
        return id++;
    }

    return { getId, getTodos, addTodo }
})();

export { todo }