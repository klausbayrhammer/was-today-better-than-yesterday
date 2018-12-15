<template>
  <li class="focus-point">
    {{name}}
    <input class="focus-point__deleted"
           type="checkbox"
           v-bind:checked="deleted"
           v-model="deleted" />
  </li>
</template>

<script>
export default {
  name: 'FocusPoint',
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
