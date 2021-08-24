const todoModule = (() => {

    let todos = [];

    function Todo(title, description, duedate, priority, project) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
        this.priority = priority;
        this.project = project;
    }
    
    Todo.prototype.pushToArray = function(array) {
        array.push(this);
    }

    let todo1 = new Todo("Todo1Title", "Descrpi1", "20-09-2022", "high", "project11");
    todo1.pushToArray(todos)

    function addTodo(title, description, duedate, priority, project) {
        let newTodo = new Todo(title, description, duedate, priority, project);
        newTodo.pushToArray(todos)
        console.log(todos)
    }

    return {todos, addTodo}
})();

export{todoModule}