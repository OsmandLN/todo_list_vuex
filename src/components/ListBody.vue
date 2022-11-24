<template>
  <ul>
    <li v-for="todoItem in getTodoItems" :key="todoItem.id">{{ todoItem.content }} <button
        @click.prevent="deleteTodos(todoItem)">X</button></li>
  </ul>
</template>

<script>
export default {
  name: 'ListBody',
  methods: {
    deleteTodos(todoItem) {
      this.$store.commit('removeTodo', todoItem)
      // console.log('del')
    }
  },
  computed: {
    getTodoItems() {
      return this.$store.state.todoItems
    },
  }
}
</script>