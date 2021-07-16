import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";


export default class TasksController{

  constructor() {
  }

  flipSelect(taskID){
    tasksService.flipSelect(taskID)
  }

  deleteTask(taskID){
    tasksService.deleteTask(taskID)
  }

  deleteTasksInList(listID){
    tasksService.deleteTasksInList(listID)
  }

  getTasksOnListTemplate(listID){
    return tasksService.TasksOnListTemplate(listID)
  }
}