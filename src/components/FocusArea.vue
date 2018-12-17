<template>
  <li class="focus-area">
    <span class="focus-area__name">{{name}}</span>
    <input class="focus-area__deleted"
           type="checkbox"
           v-model="deleted" />
  </li>
</template>

<script>
import deleteFocusArea from './delete-focus-area'

export default {
  name: 'FocusArea',
  props: ['name', 'initialDeleted'],
  data: function () {
    return {
      deleted: this.initialDeleted
    }
  },
  watch: {
    deleted: function () {
      deleteFocusArea({deleted: this.deleted, name: this.name})
    }
  }
}
</script>

<style scoped>

</style>
