import { listsService } from "../Services/ListsService.js";
import { getFormData } from "../Utils/FormHandler.js";

export class ListsController {
  constructor() {
    console.log("hello from lists controller");
  }
  createList(taskId) {
    try {
      window.event.preventDefault();
      console.log("hello from lists createList");
      const form = window.event.target;
      let newList = getFormData(form);
      newList.taskId = taskId;
      listsService.createList(newList);
      // @ts-ignore
      form.reset();
    } catch (error) {
      console.log("error from list controller");
    }
  }
  removeList(listId) {
    console.log(listId);
    if (window.confirm("are you done with this?")) {
      listsService.removeList(listId);
    }
  }

  toggleChecked(id){
    listsService.toggleChecked(id)
  }
}
