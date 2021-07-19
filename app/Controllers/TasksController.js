import { ProxyState } from "../AppState.js";
import { tasksService } from "../Services/TasksService.js";



export default class TasksController{

  constructor() {
  }


  addTask(listID){
    event.preventDefault()
    let taskInput = event.target
    let rawTask = {
      taskJob: taskInput.taskJob.value,
      listID: listID
    }
    tasksService.addTask(rawTask)
    taskInput.reset()
  }

  flipSelect(taskID){
    debugger
    tasksService.flipSelect(taskID)
  }

  deleteTask(taskID){
    if(window.confirm("Delete Task?")){
      tasksService.deleteTask(taskID)
    }
  }

  deleteTasksInList(listID){
    let listsController = new ListsController()
    tasksService.deleteTasksInList(listID)
  }

  getTasksOnListTemplate(listID){
    return tasksService.TasksOnListTemplate(listID)
  }
}