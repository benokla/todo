import { todo } from "./todo";
import { project } from "./project";

const store = (() => {
    function save() {
        localStorage.setItem("todos", JSON.stringify(todo.getTodos()))
        localStorage.setItem("projects", JSON.stringify(project.getProjects()))
    }

    function loadTodos() {
        let todos = JSON.parse(localStorage.getItem("todos"));

        todos.forEach(element => {
            todo.addTodo(element.title, element.description, element.dueDate, element.priority, element.project, element.id)
        });

    }

    function loadProjects() {
        let projects = localStorage.getItem("projects");
        project.setProjects(JSON.parse(projects))
    }


    return{save, loadTodos, loadProjects}
})();

export { store }