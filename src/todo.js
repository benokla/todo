const todo = (() => {

    let todos = [];
    let i = 1;

    const todoFactory = (title, description, dueDate, priority, project) => {
        return {title, description, dueDate, priority, project}
    }

    const addTodo = (title, description, dueDate, priority, project) => {

        

        if(title == ""){
            alert("Title cant be empty.")
            return;
        }

        let todoTitlesArray = todos.map((todo) => { return todo.title });
        if(todoTitlesArray.includes(title)) {
            title = `${title} (${i++})`
        }

        const todo = todoFactory(title, description, dueDate, priority, project);
        todos.push(todo)
        console.log(todos)
    }

    const deleteTodo = (e) => {
        todos = todos.filter((todo) => {
            if(`${todo.title} - Due: ${todo.dueDate}` !== e.target.parentNode.childNodes[0].textContent){
                return todo;
            }
        })
        console.log(todos)
        return todos;
    }

    addTodo("T1", "D1", "2021-09-05", "low", "PR1")
    addTodo("T2", "D1", "2021-09-06", "medium", "PR1")

    return { todos, addTodo, deleteTodo}
})();

export {todo}