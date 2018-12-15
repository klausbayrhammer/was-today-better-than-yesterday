import Vue from 'vue'
import FocusArea from '@/components/FocusArea'

describe('FocusArea.vue', () => {
  it('shows the name of the focus are', () => {
    const Constructor = Vue.extend(FocusArea)
    const vm = new Constructor({
      propsData: {name: 'focusAreaName', deleted: false}
    }).$mount()
    expect(vm.$el.querySelector('.focus-area__name').textContent).toEqual('focusAreaName')
  })
  xit('marks a focus area as deleted when clicking the delete checkbox', () => {
  })
})
