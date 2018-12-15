import Vue from 'vue'
import FocusPoints from '@/components/FocusPoints'

describe('FocusPoints.vue', () => {
  it('should render all focus points', () => {
    const Constructor = Vue.extend(FocusPoints)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelectorAll('.focus-point').length)
      .toEqual(2)
  })

  it('marks focuspoint as deleted when checking the deleted checkbox', () => {
    const Constructor = Vue.extend(FocusPoints)
    const vm = new Constructor().$mount()
    vm.$el.querySelector('.focus-point__deleted').click()

    expect(vm.focusPoints[0].deleted).toEqual(true)
  })
})
