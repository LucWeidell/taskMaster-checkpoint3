import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";
import ListsController from "./listsController.js";



export default class TasksController{

  constructor() {
  }

  addTask(listID){
    let listsController = new ListsController()
    event.preventDefault()
    let taskInput = event.target
    let rawTask = {
      taskJob: taskInput.taskJob.value,
      listID: listID
    }
    tasksService.addTask(rawTask)
    listsController.testDraw()
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