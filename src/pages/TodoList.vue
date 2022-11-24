<template>
  <AddPanel />
  <ListBody />
</template>

<script>
import AddPanel from '@/components/AddPanel.vue'
import ListBody from '@/components/ListBody.vue';


export default {
  name: 'TodoList',
  components: {
    AddPanel,
    ListBody
  }
}
</script>