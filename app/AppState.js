
import List from "./Models/List.js"
import Task from "./Models/Task.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {List[]} */
  lists = [
    //Hard Coded examples for testing
    // new List ({title: 'Test in app1', color: 'blue'})
    // new List ({title: 'Test in app2', color: 'green'}),
  ]

  /** @type {Task[]} */
  tasks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
