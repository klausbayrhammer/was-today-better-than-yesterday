<template>
  <div class="focus-area-entry">
    <h2 class="focus-area-entry__name">{{name}}</h2>
    <button class="focus-area-entry__better" @click="entry(1)">+</button>
    <button class="focus-area-entry__worse" @click="entry(-1)">0</button>
    <button class="focus-area-entry__not-applicable" @click="entry(0)">-</button>
  </div>
</template>

<script>
export default {
  name: 'AddFocusAreaEntry',
  props: ['id', 'name', 'addEntry'],
  methods: {
    entry (value) {
      this.addEntry({id: this.id, value})
    }
  }
}
</script>

<style scoped>

</style>
