import Vue from 'vue'
import FocusArea from '@/components/FocusArea'
import deleteFocusArea from '@/components/delete-focus-area'

jest.mock('@/components/delete-focus-area')

describe('FocusArea.vue', () => {
  const Constructor = Vue.extend(FocusArea)

  it('shows the name of the focus are', () => {
    const vm = new Constructor({
      propsData: {name: 'focusAreaName', deleted: false}
    }).$mount()
    expect(vm.$el.querySelector('.focus-area__name').textContent).toEqual('focusAreaName')
  })

  it('marks a focus area as deleted when clicking the delete checkbox', async () => {
    const vm = new Constructor({
      propsData: {name: 'focusAreaName', deleted: false}
    }).$mount()

    return new Promise((resolve, reject) => {
      deleteFocusArea.mockImplementation((args) => {
        try {
          expect(args).toEqual({name: 'focusAreaName', deleted: true})
        } catch (e) {
          reject(e)
        }
        resolve()
      })
      vm.$el.querySelector('.focus-area__deleted').click()
    })
  })
})
