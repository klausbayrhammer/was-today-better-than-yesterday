import {mount} from '@vue/test-utils'
import Maintenance from '@/pages/Maintenance'
import FocusAreaList from '@/components/FocusAreaList'

let mockOnChangeCB
jest.mock('@/database/load-focus-areas', () => ({
  onChange: cb => {
    mockOnChangeCB = cb
  }
}))
jest.mock('@/database/firebase-db', () => {})

describe('Maintenance.vue', () => {
  it('renders a loading indicator until data is loaded', () => {
    const wrapper = mount(Maintenance)
    expect(wrapper.find('.maintenance__loading').exists()).toBeTruthy()
  })
  it('does not render a loading indicator when data is available', async () => {
    const wrapper = mount(Maintenance)
    mockOnChangeCB([{}])
    expect(wrapper.find('.maintenance__loading').exists()).toBeFalsy()
  })
  it('renders a focus area list', async () => {
    const initialFocusAreas = [{
      initialFocusAreas: [
        {name: 'Punctuality', deleted: false}
      ]
    }]

    const wrapper = mount(Maintenance)
    mockOnChangeCB(initialFocusAreas)

    expect(wrapper.find(FocusAreaList).props().initialFocusAreas).toEqual(initialFocusAreas)
  })
})
