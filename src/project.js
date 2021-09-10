import { store } from "./store";

const project = (() => {
    let projects = [];

    function addProject(newProject) {
        projects.push(newProject)
        console.log(projects)
        store.save()
    }

    function getProjects() {
        return projects;
    }

    function getProject(index) {
        return projects[index]
    }

    function deleteProject(element) {
        let pos = projects.indexOf(element)
        projects.splice(pos, 1);
        store.save()
    }

    function setProjects(array) {
        projects = array;
    }

    return {addProject, getProjects, getProject, deleteProject, setProjects}
})();

export { project }