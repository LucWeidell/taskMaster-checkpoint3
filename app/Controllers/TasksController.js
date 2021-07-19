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
    let listsController = new ListsController()
    tasksService.flipSelect(taskID)
    listsController.testDraw()
  }

  deleteTask(taskID){
    if(window.confirm("Delete Task?")){
      let listsController = new ListsController()
      tasksService.deleteTask(taskID)
      listsController.testDraw()
    }
  }

  deleteTasksInList(listID){
    let listsController = new ListsController()
    tasksService.deleteTasksInList(listID)
    listsController.testDraw()
  }

  getTasksOnListTemplate(listID){
    return tasksService.TasksOnListTemplate(listID)
  }
}