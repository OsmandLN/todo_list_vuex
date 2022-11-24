<template>
  <input type="text" v-model="newTodo">
  <button @click="addTodo">Add</button>
</template>

<script>
import { v4 as uuidv4 } from 'uuid'

export default {
  data() {
    return {
      newTodo: ''
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() === '') {
        return
      } else {
        const todo = { id: uuidv4(), content: '' }
        todo.content = this.newTodo
        this.$store.commit('setTodos', todo)
        // console.log('this.todo', this.newTodo)
        // console.log('todo', todo)
        this.newTodo = ''
      }
    }
  }
}
</script>