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
    let todo2 = new Todo("Taodo1Title", "Descrpi1", "2021-09-03", "high", "project11");
    todo1.pushToArray(todos)
    todo2.pushToArray(todos)

    function addTodo(title, description, duedate, priority, project) {
        let newTodo = new Todo(title, description, duedate, priority, project);
        newTodo.pushToArray(todos)
        console.log(todos)
    }
    
    function deleteTodo(e) {
        for(let i = 0; i<todos.length; i++){
            if(e.target.parentNode.childNodes[0].textContent == `${todos[i].title} - Due: ${todos[i].duedate}`){
                todos.splice(i,1)
            }
        }        
    }

    return {todos, addTodo, deleteTodo}
})();

export{todoModule}