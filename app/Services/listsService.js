
import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";


class ListsService {

  constructor(){}

  addList(rawList){
    ProxyState.lists = [...ProxyState.lists, new List(rawList)]
  }

  deleteList(listId){
    let newList = ProxyState.lists.filter(list => list != listId)
    ProxyState.lists = newList
  }
}

export const listsService = new ListsService();