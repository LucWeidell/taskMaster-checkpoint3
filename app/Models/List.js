import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GeneratedID.js";
import Task from "./Task.js";

export default class List{

  constructor({title, color}){

    this.title = title;
    this.color = 'bg-' + color.toLowerCase();

    this.listID = generateId()

  }

  get Template(finTasks, totTasks) {
    return /*html*/`
      <div class="col-md-4 shadow-lg">
        <div class="row">
          <div class="col-md-12 text-center ${this.color}">
              <span class="action d-flex justify-content-end" onclick="app.listsController.deleteList('${this.listID}')">X</span>
              <h4>${this.title}</h4>
              <p>${finTasks} / ${totTasks}</p>
          </div>
        </div>
      <div class="row bg-white" id ="${this.listID}">
        ${this.ListTasks()}
      </div>
    </div>
    `
  }

  get ListTasks(){
    let myTasks = ProxyState.tasks.filter(task => task.listID == this.listID)
      myTasks.Template(this.listID);
  }

}