import Vue from 'vue'
import {mount} from '@vue/test-utils'
import AddFocusAreaEntry from '@/components/AddFocusAreaEntry'
import addEntry from '@/database/add-entry'

jest.mock('@/database/add-entry')

describe('AddFocusAreaEntry.vue', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  it('renders the focus area entry component', () => {
    const wrapper = mount(AddFocusAreaEntry, {
      propsData: {name: 'focusAreaName'}
    })
    expect(wrapper.find('.focus-area-entry__name').text()).toEqual('focusAreaName')
    expect(wrapper.find('.focus-area-entry__better').exists()).toBeTruthy()
    expect(wrapper.find('.focus-area-entry__worse').exists()).toBeTruthy()
    expect(wrapper.find('.focus-area-entry__not-applicable').exists()).toBeTruthy()
  })

  it('adds an focus area entry with -1 when clicking worse', async () => {
    const wrapper = mount(AddFocusAreaEntry, {
      propsData: {id: 'id'}
    })
    wrapper.find('.focus-area-entry__worse').trigger('click')
    await Vue.nextTick()
    expect(addEntry).toHaveBeenCalledWith({id: 'id', value: -1})
  })

  it('adds an focus area entry with 1 when clicking better', async () => {
    const wrapper = mount(AddFocusAreaEntry, {
      propsData: {id: 'id'}
    })
    wrapper.find('.focus-area-entry__better').trigger('click')
    await Vue.nextTick()
    expect(addEntry).toHaveBeenCalledWith({id: 'id', value: 1})
  })
  it('adds an focus area entry with 0 when clicking not applicable', async () => {
    const wrapper = mount(AddFocusAreaEntry, {
      propsData: {id: 'id'}
    })
    wrapper.find('.focus-area-entry__not-applicable').trigger('click')
    await Vue.nextTick()
    expect(addEntry).toHaveBeenCalledWith({id: 'id', value: 0})
  })

})
