import { generateId } from "../Utils/GeneratedID.js";

export default class Task{

  constructor({taskJob, listID, isSelected = false, taskID = generateId()}){
    this.taskJob = taskJob;
    this.listID = listID;

    this.taskID = taskID
    this.isSelected = isSelected;
  }

  flipSelect(){
    this.isSelected = !this.isSelected;
  }

  getTemplate(listId) {
    return /*html*/`
      <div class="col-md-12 d-flex justify-content-between">
        <div class="form-group form-check" onchange="app.tasksController.flipSelect('${this.taskID}')" >
          <input type="checkbox" class="form-check-input" id="testCheck" ${this.isSelected ? 'checked' : ''}>
          <label class="form-check-label" for="testCheck">'${this.taskJob}'</label>
        </div>
        <span class="action" onclick="app.tasksController.deleteTask('${this.taskID}')">X</span>
      </div>
      `
  }
}