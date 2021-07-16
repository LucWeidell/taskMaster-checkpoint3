import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/listsService.js";
import TasksController from "./TasksController.js";
let tasksController = new TasksController()


_draw(){
  let template = ''
  let lists = ProxyState.lists
  lists.forEach(list => {
    //Getting total and all checked tasks: can make these functions later
    let totTask = ProxyState.tasks.filter(task=> task.listID == list.id)
    let finTask = 0
    totTask.forEach(task=> {
      if(task.isSelected){
        finTask++
    }})
    template += list.Template(finTask, totTask)
    template += tasksController.TasksOnListTemplate(list.listID)


  })


  document.getElementById('lists').innerHTML = template
}

export default class listsController{

  constructor(){
    ProxyState.on['lists', _draw]
    ProxyState.on['tasks', _draw]

  }

  deleteList(listId){
    listsService.deleteList(listId)
  }
}