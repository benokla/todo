import { UI } from "./UI";
import { todo } from "./todo";
import { store } from "./store";

store.loadTodos();
store.loadProjects();
UI.showTodos("inbox");
UI.displayProjects();