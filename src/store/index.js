import { createStore } from 'vuex'

export default createStore({
  state: {
    todo: '',
    todoItems: []
  },
  getters: {
  },
  mutations: {
    setTodos(state, payload) {
      state.todoItems.push(payload)
      // console.log('payload', payload)
      // console.log('todos', state.todoItems)
    },
    removeTodo(state, payload) {
      state.todoItems = state.todoItems.filter(todo => todo.id !== payload.id)
      // console.log(state.todoItems)
      console.log('payload', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
