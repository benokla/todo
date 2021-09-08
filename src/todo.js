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
        console.log(todoIds, pos, index)
        todos.splice(pos, 1);
    }
    return { getId, getTodos, addTodo, getTodo, deleteTodo }
})();

export { todo }