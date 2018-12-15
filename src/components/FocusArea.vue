<template>
  <li class="focus-area">
    <span class="focus-area__name">{{name}}</span>
    <input class="focus-area__deleted"
           type="checkbox"
           v-bind:checked="deleted"
           v-model="deleted" />
  </li>
</template>

<script>
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
      console.log('toggledelete', this.deleted)
    }
  }
}
</script>

<style scoped>

</style>
