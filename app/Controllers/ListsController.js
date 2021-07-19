import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { saveState } from "../Utils/LocalStorage.js";
import TasksController from "./TasksController.js";
let tasksController = new TasksController()


function _draw(){
  let template = ''
  let lists = ProxyState.lists
  lists.forEach(list => {
    //Getting total and all checked tasks: can make these functions later
    let totTask = ProxyState.tasks.filter(task=> task.listID == list.id)
    let finTask = 0
    if(totTask.length == 0){
      template += list.getTemplate(0, 0)
    } else {
      totTask.forEach(task=> {
        if(task.isSelected){
          finTask++
      }})
    template += list.getTemplate(finTask, totTask)
    }
  document.getElementById('lists').innerHTML = template
  })
}

export default class ListsController{

  constructor(){
    ProxyState.on['lists', _draw]
    ProxyState.on['tasks', _draw]
    ProxyState.on['lists', saveState]
    ProxyState.on['tasks', saveState]
    _draw()
    // loadState() wwait till i get other things working

  }

  // testDraw(){
  //   _draw()
  // }

  deleteList(listId){
    listsService.deleteList(listId)
    tasksController.deleteTasksInList(listId)
  }

  addList(){
    event.preventDefault()
    let form = event.target
    let rawList = {
      title: form.title.value,
      color: form.color.value
    }
    listsService.addList(rawList)
    _draw()
    form.reset()
  }
}