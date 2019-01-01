import {mount} from '@vue/test-utils'
import DailyEntries from '@/pages/DailyEntries'
import AddFocusAreaEntryWizzard from '@/components/AddFocusAreaEntryWizzard'
import Loading from '@/components/Loading'

let mockOnChangeCB
jest.mock('@/database/load-focus-areas', () => ({
  onChange: cb => {
    mockOnChangeCB = cb
  }
}))
jest.mock('@/database/firebase-db', () => {})
jest.mock('@/components/cal-heatmap/cal-heatmap', () => ({
  __esModule: true,
  default: () => {}
}))

describe('DailyEntries.vue', () => {
  it('renders a loading indicator until data is loaded', () => {
    const wrapper = mount(DailyEntries)
    expect(wrapper.find(Loading).exists()).toBeTruthy()
  })
  it('does not render a loading indicator when data is available', async () => {
    const wrapper = mount(DailyEntries)
    mockOnChangeCB([{}])
    expect(wrapper.find(Loading).exists()).toBeFalsy()
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
