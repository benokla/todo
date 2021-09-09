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

    return {addProject, getProjects, getProject}
})();

export { project }