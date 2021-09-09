const project = (() => {
    let projects = [];

    function addProject(newProject) {
        projects.push(newProject)
        console.log(projects)
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
    }

    return {addProject, getProjects, getProject, deleteProject}
})();

export { project }