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

    let todo1 = new Todo("Todo1Title", "Descrpi1", "2022-09-01", "high", "project11");
    let todo2 = new Todo("Taodo1Title", "Descrpi1", "2021-09-02", "high", "project11");
    todo1.pushToArray(todos)
    todo2.pushToArray(todos)

    function addTodo(title, description, duedate, priority, project) {
        let newTodo = new Todo(title, description, duedate, priority, project);
        newTodo.pushToArray(todos)
        console.log(todos)
    }
    
    function deleteTodo(e) {
        todos = todos.filter((todo) => {
            if(e.target.parentNode.childNodes[0].textContent !== `${todo.title}: ${todo.description}`){
                return todo;
            }
        })
        console.log(todos)
    }

    return {todos, addTodo, deleteTodo}
})();

export{todoModule}