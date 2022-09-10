import { generateId } from "../Utils/generateId.js";

export class List {
  constructor(data) {
    this.name = data.name;
    this.taskId = data.taskId;
    this.id = data.id || generateId();
    this.checked = data.checked || false;
  }

  get Template() {
    return `
    <li class="list-group-item d-flex justify-content-between">
                  <input
                    class="form-check-input me-1"
                    type="checkbox"
                    onchange="app.listsController.toggleChecked('${this.id}')"
                    ${this.checked ? "checked" : ""}
                    id="listItem"
                  />
                <span>${this.name}</span>
                  <i class="mdi mdi-delete-forever" onclick="app.listsController.removeList('${
                    this.id
                  }')"></i>
                </li>
    
    
    
    `;
  }
}
