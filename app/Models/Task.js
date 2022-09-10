import { generateId } from "../Utils/generateId.js";
import { appState } from "../AppState.js";

export class Task {
  constructor(data) {
    this.name = data.name;
    this.color = data.color;
    this.id = data.id || generateId();
  }

  get Checked() {
    let checked = appState.lists.filter((checked) => checked.checked == true);
    return checked;
  }

  get ListTemplate() {
    let template = "";
    this.Lists.forEach((list) => (template += list.Template));
    return template;
  }
  get Lists() {
    let list = appState.lists.filter((list) => list.taskId == this.id);
    return list;
  }

  get Template() {
    return /*html*/ `

    <div class="col-md-3 my-3 mx-md-5">
            <div class="card elevation-5">
              <div class="card-header fs-4 fw-bold d-flex justify-content-between"
              style="background-color:${this.color}"
              >
                <span>${this.name}</span>
                <div class="d-flex fs-6 align-items-center">
                <span>${this.Checked.length}</span>
                <span>/</span>
                <span>${this.Lists.length}</span>
                </div>
                <i class="mdi mdi-delete-forever" onclick="app.tasksController.removeTask('${this.id}')"></i>
              </div>
              <ul class="list-group" id="lists">
              ${this.ListTemplate}
              </ul>
              <div style="background-color:${this.color}">
                <form class="m-2 d-flex justify-content-center gap-3" onsubmit="app.listsController.createList('${this.id}')">
                  <input type="text" name="name" id="" class="rounded" required />
                  <button class="btn btn-warning" type="submit">
                    add task
                  </button>
                </form>
              </div>
            </div>
          </div>
    
    
    
    `;
  }
}
