import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";


class TasksService {

  constructor(){}

  addTask(rawTask){
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
    ProxyState.tasks = ProxyState.tasks
  }

  deleteTask(taskID){
    ProxyState.tasks = ProxyState.tasks.filter(task => task.taskID != taskID)
    ProxyState.tasks = ProxyState.tasks
  }

  deleteTasksInList(listID){
    ProxyState.tasks = ProxyState.tasks.filter(task => task.listID != listID)
    ProxyState.tasks = ProxyState.tasks
  }


  flipSelect(taskID){
    ProxyState.tasks.find(task => task.taskID == taskID).flipSelect()
    //This will trigger redraw in the lists controller
    ProxyState.tasks = ProxyState.tasks;
  }
}

export const tasksService = new TasksService();