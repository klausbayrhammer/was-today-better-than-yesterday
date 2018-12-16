import Vue from 'vue'
import FocusArea from '@/components/FocusArea'
import deleteFocusArea from '@/components/delete-focus-area';

jest.mock('@/components/delete-focus-area')

describe('FocusArea.vue', () => {
  it('shows the name of the focus are', () => {
    const Constructor = Vue.extend(FocusArea)
    const vm = new Constructor({
      propsData: {name: 'focusAreaName', deleted: false}
    }).$mount()
    expect(vm.$el.querySelector('.focus-area__name').textContent).toEqual('focusAreaName')
  })
  it('marks a focus area as deleted when clicking the delete checkbox', async () => {
    const Constructor = Vue.extend(FocusArea)
    const vm = new Constructor({
      propsData: {name: 'focusAreaName', deleted: false}
    }).$mount()
    vm.$el.querySelector('.focus-area__deleted').click()
    await new Promise(resolve => {
      setTimeout(resolve, 1)
    })
    expect(deleteFocusArea).toHaveBeenCalledWith('focusAreaName', true)
  })
})
