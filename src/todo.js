const todo = (() => {

    let todos = [];

    const todoFactory = (title, description, dueDate, priority, project) => {
        return {title, description, dueDate, priority, project}
    }

    const addTodo = (title, description, dueDate, priority, project) => {
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

    addTodo("T1", "D1", "2021-09-05", "P1", "PR1")
    addTodo("T1", "D1", "2021-09-06", "P1", "PR1")

    return { todos, addTodo, deleteTodo}
})();

export {todo}