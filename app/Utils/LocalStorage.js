import { ProxyState } from "../AppState.js";


export function saveState() {
  localStorage.setItem('taskMaster', JSON.stringify({
    lists: ProxyState.lists,
    tasks: ProxyState.toppings
  }))
  console.log('saved state', ProxyState)
}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('taskMaster'))
  console.log(data)
  if (data != null) {
    ProxyState.lists = data.pizzas.map(p => new Pizza(p))
    ProxyState.tasks = data.toppings.map(t => new Topping(t))
  }

}