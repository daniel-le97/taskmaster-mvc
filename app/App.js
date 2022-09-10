import { ListsController } from "./Controllers/ListsController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { Pop } from "./Utils/Pop.js";

class App {
  tasksController = new TasksController();
  listsController = new ListsController();
  pop = new Pop();
}

window["app"] = new App();
