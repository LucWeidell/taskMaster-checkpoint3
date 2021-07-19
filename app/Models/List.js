import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/GeneratedID.js";

export default class List{

  constructor({title, color}){

    this.title = title;
    let interColor = color.toLowerCase();

    this.color = 'bg-'+interColor;

    this.listID = generateId()

  }

  getTemplate(finTasks, totTasks) {
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
        ${this.getListTasks()}
      </div>
      <div class="col">
        <form class= "d-flex" onsubmit="app.tasksController.addTask('${this.listID}')">
          <input required type="text" name="taskJob" placeholder="Add Task ...." minlength="3" maxlength="50">
          <button type="submit" class="btn btn-outline-success">+</button>
        </form>
      </div>
    </div>
    `
  }

  getListTasks(){
    let myTasks = ProxyState.tasks.filter(task => task.listID == this.listID)
    if (myTasks.length == 0) {
      return ''
    } else {
      let template = ''
      myTasks.forEach(task => template += task.getTemplate(this.listID));
      return template
    }
  }
}