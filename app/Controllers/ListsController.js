import { ProxyState } from "../AppState.js";
import { listsService } from "../Services/ListsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import TasksController from "./TasksController.js";



function _draw(){
  let template = ''
  let lists = ProxyState.lists
  if(lists.length == 0){
    document.getElementById('lists').innerHTML = template
  } else {
    lists.forEach(list => {
      //Getting total and all checked tasks: can make these functions later
      let totTask = ProxyState.tasks.filter(task => task.listID == list.listID)
      let finTask = 0
      if (totTask.length == 0) {
        template += list.getTemplate(0, 0)
      } else {
        totTask.forEach(task => {
          if (task.isSelected) {
            finTask++
          }
        })
        template += list.getTemplate(finTask, totTask.length)
      }
      document.getElementById('lists').innerHTML = template
    })
  }
}

export default class ListsController{

  constructor(){
    ProxyState.on('lists', _draw)
    ProxyState.on('tasks', _draw)
    ProxyState.on('lists', saveState)
    ProxyState.on('tasks', saveState)
    loadState()
    _draw()

  }

  deleteList(listId){
    if(window.confirm("Delete List?")){
      let tasksController = new TasksController()
      listsService.deleteList(listId)
      tasksController.deleteTasksInList(listId)
    }
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