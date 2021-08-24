const todoModule = (() => {

    let todos = [];

    function Todo(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
    }
    
    Todo.prototype.pushToArray = function(array) {
        array.push(this);
    }

    let todo1 = new Todo("Todo1Title", "Descrpi1", "20-09-2022", "high", "project11");

    
})();

export{todoModule}