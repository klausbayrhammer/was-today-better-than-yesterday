import {mount} from '@vue/test-utils'
import DailyEntries from '@/pages/DailyEntries'
import AddFocusAreaEntryWizzard from '@/components/AddFocusAreaEntryWizzard'

let mockOnChangeCB
jest.mock('@/database/load-focus-areas', () => ({
  onChange: cb => {
    mockOnChangeCB = cb
  }
}))
jest.mock('@/database/firebase-db', () => {})

describe('DailyEntries.vue', () => {
  it('renders a loading indicator until data is loaded', () => {
    const wrapper = mount(DailyEntries)
    expect(wrapper.find('.maintenance__loading').exists()).toBeTruthy()
  })
  it('does not render a loading indicator when data is available', async () => {
    const wrapper = mount(DailyEntries)
    mockOnChangeCB([{}])
    expect(wrapper.find('.maintenance__loading').exists()).toBeFalsy()
  })
  it('renders a AddFocusAreaEntryWizzard after loading is done', async () => {
    const focusAreas = [{
      initialFocusAreas: [
        {name: 'Punctuality', deleted: false}
      ]
    }]

    const wrapper = mount(DailyEntries)
    mockOnChangeCB(focusAreas)

    expect(wrapper.find(AddFocusAreaEntryWizzard).props().focusAreas).toEqual(focusAreas)
  })
})
