import { dom } from "./dom"
import { todo } from "./todo"
import { project } from "./project"

function init() {
    dom.loadInbox();
    project.showProjects();
}

init();