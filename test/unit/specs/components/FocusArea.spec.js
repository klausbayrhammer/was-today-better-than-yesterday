import Vue from 'vue'
import { mount } from '@vue/test-utils'
import FocusArea from '@/components/FocusArea'
import deleteFocusArea from '@/database/delete-focus-area'
import updateFocusAreaName from '@/database/update-focus-area-description'

jest.mock('@/database/delete-focus-area')
jest.mock('@/database/update-focus-area-description')

describe('FocusArea.vue', () => {
  it('shows the name of the focus are', () => {
    const wrapper = mount(FocusArea, {
      propsData: {initialName: 'focusAreaName', deleted: false}
    })
    expect(wrapper.find('.focus-area__name').text()).toEqual('focusAreaName')
  })

  it('marks a focus area as deleted when clicking the delete checkbox', done => {
    const wrapper = mount(FocusArea, {
      propsData: {initialName: 'focusAreaName', deleted: false}
    })

    deleteFocusArea.mockImplementation((args) => {
      expect(args).toEqual({name: 'focusAreaName', deleted: true})
      done()
    })
    wrapper.find('.focus-area__deleted').trigger('click')
  })

  it('is possible to initialize a focus area in edit mode', () => {
    const wrapper = mount(FocusArea, {
      propsData: {initialName: 'focusAreaName', deleted: false, initalEditMode: true}
    })
    expect(wrapper.find('.focus-area__name').element).toBeFalsy()
    expect(wrapper.find('.focus-area__name-field').element.value).toEqual('focusAreaName')
  })

  it('is possible to toggle focus areas to edit stateedit the name of a focus area', async () => {
    const wrapper = mount(FocusArea, {
      propsData: {initialName: 'focusAreaName', deleted: false}
    })
    wrapper.find('.focus-area__name').trigger('click')
    await Vue.nextTick()
    expect(wrapper.find('.focus-area__name').element).toBeFalsy()
    expect(wrapper.find('.focus-area__name-field').element.value).toEqual('focusAreaName')
  })

  it('is possible to update the focus area name', async (done) => {
    const wrapper = mount(FocusArea, {
      propsData: {id: 'id', initialName: 'focusAreaName', deleted: false, initalEditMode: true}
    })

    updateFocusAreaName.mockImplementation((args) => {
      expect(args).toEqual({id: 'id', name: 'changedFocusAreaName'})
      done()
    })

    wrapper.find('.focus-area__name-field').element.value = 'changedFocusAreaName'
    await Vue.nextTick()
    wrapper.find('.focus-area__name-field').trigger('input')
    wrapper.find('.focus-area__name-field').trigger('change')
  })
})
