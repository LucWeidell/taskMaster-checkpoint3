import { ProxyState } from "../AppState.js";


export default class TasksController{

  constructor() {
  }

  flipSelect(taskID){
    tasksService.flipSelect(taskID)
  }

  get TasksOnListTemplate(listID){
    return tasksService.TasksOnListTemplate(listID)
  }
}