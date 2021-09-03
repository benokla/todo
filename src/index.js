import { todoModule } from "./todo";
import { displayController } from "./dom";

displayController.loadInbox(todoModule.todos)

