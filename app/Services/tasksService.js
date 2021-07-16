import { ProxyState } from "../AppState.js";
import Task from "../Models/Task.js";


class TasksService {

  constructor(){}

  addTask(rawTask){
    ProxyState.tasks = [...ProxyState.tasks, new Task(rawTask)]
  }

  flipSelect(taskID){
    ProxyState.tasks.find(task => task.id == taskID).flipSelect()
    //This will trigger redraw in the lists controller
    ProxyState.tasks = ProxyState.tasks;
  }
}

export const tasksService = new TasksService();