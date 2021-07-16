import { generateId } from "../Utils/GeneratedID";

export default class Task{

  constructor({taskJob}){
    this.taskJob = taskJob;

    this.taskID = generateId()
    this.isSelected = false;
  }

  flipSelect(){
    this.isSelected = !this.isSelected;
  }

  get Template() {
    return /*html*/`
      <div class="col-md-12 d-flex justify-content-between">
        <div class="form-group form-check" onchange="app.tasksController('${this.taskID}')" >
          <input type="checkbox" class="form-check-input" id="testCheck">
          <label class="form-check-label" for="testCheck">'${this.taskJob}'</label>
        </div>
        <span class="action" onclick="app.tasksController.deleteTask('${this.taskID}')">X</span>
      </div>



    `
  }
}