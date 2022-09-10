import { appState } from "../AppState.js";
import { List } from "../Models/List.js";
import { saveState } from "../Utils/Store.js";

class ListsService {
  toggleChecked(id) {
    let list = appState.lists.find((list) => list.id == id);
    if (!list) {
      throw new Error("bad id");
    }
    list.checked = !list.checked;
    appState.emit("lists");
    saveState("lists", appState.lists);
  }
  removeList(listId) {
    let lists = appState.lists.filter((list) => list.id != listId);
    appState.lists = lists;
    saveState("lists", appState.lists);
  }
  createList(newList) {
    let list = new List(newList);
    console.log(list);
    appState.lists = [list, ...appState.lists];
    console.log(appState.lists);
    saveState("lists", appState.lists);
  }
}
export const listsService = new ListsService();
