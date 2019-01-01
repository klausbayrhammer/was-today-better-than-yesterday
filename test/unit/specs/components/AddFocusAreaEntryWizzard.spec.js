import {mount} from '@vue/test-utils'
import AddFocusAreaEntryWizzard from '@/components/AddFocusAreaEntryWizzard'
import filterFocusAreas from '@/components/filter-focus-areas-for-pending-todays-entries'
import AddFocusAreaEntry from '@/components/AddFocusAreaEntry'
import FocusAreaGraphList from '@/components/FocusAreaGraphList'

jest.mock('@/components/filter-focus-areas-for-pending-todays-entries')
jest.mock('@/database/firebase-db', () => {})
jest.mock('@/components/cal-heatmap/cal-heatmap', () => ({
  __esModule: true,
  default: () => {}
}))

describe('AddFocusAreaEntryWizzard.vue', () => {
  it('renders the focus area entry component', () => {
    filterFocusAreas.mockImplementation(focusAreas => ({
      id: focusAreas[0].id,
      name: 'filtered-focus-area'
    }))
    const wrapper = mount(AddFocusAreaEntryWizzard, {
      propsData: {focusAreas: [{id: 'id', name: 'focusAreaName'}]}
    })
    expect(wrapper.find(AddFocusAreaEntry).props().id).toEqual('id')
    expect(wrapper.find(AddFocusAreaEntry).props().name).toEqual('filtered-focus-area')
  })

  it('renders a plain message if no focus areas have pending inputs', () => {
    filterFocusAreas.mockImplementation(() => undefined)
    const wrapper = mount(AddFocusAreaEntryWizzard, {
      propsData: {focusAreas: [{id: 'id', name: 'focusAreaName'}]}
    })
    expect(wrapper.find('.add-focus-area-entry-wizzard__done').text()).toEqual('Done for today')
    expect(wrapper.find(FocusAreaGraphList).props()).toEqual({focusAreas: [{id: 'id', name: 'focusAreaName'}]})
  })
})
