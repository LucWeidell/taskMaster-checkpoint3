import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";


export default class TasksController{

  constructor() {
  }

  addTask(listID){
    event.preventDefault()
    debugger
    let taskInput = event.target
    let rawTask = {
      taskJob: taskInput.taskJob.value,
      listID: listID
    }
    tasksService.addTask(rawTask)
    taskInput.reset()
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