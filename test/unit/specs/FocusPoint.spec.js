import Vue from 'vue'
import FocusPoint from '@/components/FocusPoint'

describe('FocusPoint.vue', () => {
  it('marks focuspoint as deleted when checking the deleted checkbox', () => {
    const Constructor = Vue.extend(FocusPoint)
    const vm = new Constructor().$mount()
    vm.$el.querySelector('.focus-point__deleted').click()
    expect(vm).toEqual(false)
  })
})
