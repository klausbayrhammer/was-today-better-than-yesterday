import {mount} from '@vue/test-utils'
import AddFocusAreaEntryWizzard from '@/components/AddFocusAreaEntryWizzard'
import filterFocusAreas from '@/components/filter-focus-areas-for-pending-todays-entries'
import {onChange} from '@/database/load-focus-areas'

jest.mock('@/components/filter-focus-areas-for-pending-todays-entries')
jest.mock('@/database/firebase-db', () => {})
jest.mock('@/database/load-focus-areas')
onChange.mockImplementation(() => {})

describe('AddFocusAreaEntryWizzard.vue', () => {
  it('renders the focus area entry component', () => {
    filterFocusAreas.mockImplementation(focusAreas => ({
      id: focusAreas[0].id,
      name: 'filtered-focus-area'
    }))
    const wrapper = mount(AddFocusAreaEntryWizzard, {
      propsData: {focusAreas: [{id: 'id', name: 'focusAreaName'}]}
    })
    expect(wrapper.vm.$children[0].id).toEqual('id')
    expect(wrapper.vm.$children[0].name).toEqual('filtered-focus-area')
  })

  it('renders a plain message if no focus areas have pending inputs', () => {
    filterFocusAreas.mockImplementation(() => undefined)
    const wrapper = mount(AddFocusAreaEntryWizzard, {
      propsData: {focusAreas: [{id: 'id', name: 'focusAreaName'}]}
    })
    expect(wrapper.find('.add-focus-area-entry-wizzard__done').text()).toEqual('Done for today')
  })
})
