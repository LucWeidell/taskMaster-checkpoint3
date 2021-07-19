import { generateId } from "../Utils/GeneratedID.js";

export default class Task{

  constructor({taskJob, listID}){
    this.taskJob = taskJob;
    this.listID = listID;

    this.taskID = generateId();
    this.isSelected = false;
  }

  flipSelect(){
    this.isSelected = !this.isSelected;
  }

  getTemplate(listId) {
    return /*html*/`
      <div class="col-md-12 d-flex justify-content-between">
        <div class="form-group form-check" onchange="app.tasksController.flipSelect('${this.taskID}')" >
          <input type="checkbox" class="form-check-input" id="testCheck" ${this.isSelected ? checked : ''}>
          <label class="form-check-label" for="testCheck">'${this.taskJob}'</label>
        </div>
        <span class="action" onclick="app.tasksController.deleteTask('${this.taskID}')">X</span>
      </div>
      `
  }
}