import { appState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { setHTML } from "../Utils/Writer.js";

function _drawTasks() {
  let template = "";
  appState.tasks.forEach((task) => (template += task.Template));
  setHTML("tasks", template);
}

export class TasksController {
  constructor() {
    _drawTasks();
    appState.on("tasks", _drawTasks);
    appState.on("lists", _drawTasks);
  }
  createTask() {
    try {
      window.event.preventDefault();
      console.log("hello from create task controller");
      const form = window.event.target;
      let formData = getFormData(form);
      tasksService.createTask(formData);
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.log("error");
    }
  }
  removeTask(id) {
    if (window.confirm("are you done with these tasks?")) {
      tasksService.removeTask(id);
    }
  }
}
