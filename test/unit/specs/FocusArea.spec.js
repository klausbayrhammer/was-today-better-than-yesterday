import Vue from 'vue'
import FocusArea from '@/components/FocusArea'
import deleteFocusArea from '@/components/delete-focus-area'
import updateFocusAreaName from '@/components/update-focus-area-description'

jest.mock('@/components/delete-focus-area')
jest.mock('@/components/update-focus-area-description')

describe('FocusArea.vue', () => {
  const Constructor = Vue.extend(FocusArea)

  it('shows the name of the focus are', () => {
    const vm = new Constructor({
      propsData: {initialName: 'focusAreaName', deleted: false}
    }).$mount()
    expect(vm.$el.querySelector('.focus-area__name').textContent).toEqual('focusAreaName')
  })

  it('marks a focus area as deleted when clicking the delete checkbox', done => {
    const vm = new Constructor({
      propsData: {initialName: 'focusAreaName', deleted: false}
    }).$mount()

    deleteFocusArea.mockImplementation((args) => {
      expect(args).toEqual({name: 'focusAreaName', deleted: true})
      done()
    })
    vm.$el.querySelector('.focus-area__deleted').click()
  })

  it('is possible to initialize a focus area in edit mode', () => {
    const vm = new Constructor({
      propsData: {initialName: 'focusAreaName', deleted: false, initalEditMode: true}
    }).$mount()
    expect(vm.$el.querySelector('.focus-area__name')).toBeFalsy()
    expect(vm.$el.querySelector('.focus-area__name-field').value).toEqual('focusAreaName')
  })

  it('is possible to toggle focus areas to edit stateedit the name of a focus area', async () => {
    const vm = new Constructor({
      propsData: {initialName: 'focusAreaName', deleted: false}
    }).$mount()
    vm.$el.querySelector('.focus-area__name').click()
    await Vue.nextTick()
    expect(vm.$el.querySelector('.focus-area__name')).toBeFalsy()
    expect(vm.$el.querySelector('.focus-area__name-field').value).toEqual('focusAreaName')
  })

  xit('is possible to update the focus area name', (done) => {
    const vm = new Constructor({
      propsData: {id: 'id', initialName: 'focusAreaName', deleted: false, initalEditMode: true}
    }).$mount()

    updateFocusAreaName.mockImplementation((args) => {
      expect(args).toEqual({id: 'id', name: 'changedFocusAreaName'})
      done()
    })

    vm.$el.querySelector('.focus-area__name-field').value = 'changedFocusAreaName'
    const event = new Event('change', {bubbles: true})
    vm.$el.querySelector('.focus-area__name-field').dispatchEvent(event)
  })
})
