<template>
  <div>
    <h2 class="focus-area-entry__name">{{name}}</h2>
    <button class="focus-area-entry__better" @click="entry(1)"></button>
    <button class="focus-area-entry__worse" @click="entry(-1)"></button>
    <button class="focus-area-entry__not-applicable" @click="entry(0)"></button>
  </div>
</template>

<script>
import addEntry from '../database/add-entry'

export default {
  name: 'FocusArea',
  props: ['id', 'name'],
  methods: {
    entry (value) {
      addEntry({id: this.id, value})
    }
  }
}
</script>

<style scoped>

</style>
