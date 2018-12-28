import {mount} from '@vue/test-utils'
import Graph from '@/pages/Graph'
import FocusGraphList from '@/components/FocusAreaGaphList'

let mockOnChangeCB
jest.mock('@/database/load-focus-areas', () => ({
  onChange: cb => {
    mockOnChangeCB = cb
  }
}))
jest.mock('@/database/firebase-db', () => {})

jest.mock('@/components/cal-heatmap', () => ({
  __esModule: true,
  default: () => {}
}))

describe('Graph.vue', () => {
  it('renders a loading indicator until data is loaded', () => {
    const wrapper = mount(Graph)
    expect(wrapper.find('.maintenance__loading').exists()).toBeTruthy()
  })
  it('does not render a loading indicator when data is available', async () => {
    const wrapper = mount(Graph)
    mockOnChangeCB([{}])
    expect(wrapper.find('.maintenance__loading').exists()).toBeFalsy()
  })
  it('renders a focus Graph list', async () => {
    const focusAreas = [{
      initialFocusAreas: [
        {name: 'Punctuality', deleted: false}
      ]
    }]

    const wrapper = mount(Graph, {stubs: {}})
    mockOnChangeCB(focusAreas)

    expect(wrapper.find(FocusGraphList).props().focusAreas).toEqual(focusAreas)
  })
})
