import Vue from 'vue'
import FocusAreaList from '@/components/FocusAreaList'

describe('FocusAreaList.vue', () => {
  it('should render all focus points', () => {
    const Constructor = Vue.extend(FocusAreaList)
    const vm = new Constructor({
      propsData: {
        focusAreas: [
          {name: 'Punctuality', deleted: false},
          {name: 'TDD', deleted: false}
        ]
      }
    }).$mount()
    expect(vm.$el.querySelectorAll('.focus-area').length).toEqual(2)
  })
})
