import {mount} from '@vue/test-utils'
import FocusAreaGraph from '@/components/FocusAreaGraph'

jest.mock('@/components/cal-heatmap/cal-heatmap', () => ({
  __esModule: true,
  default: () => {}
}))

describe('FocusAreaGraph.vue', () => {
  it('should render the focus are name', () => {
    const wrapper = mount(FocusAreaGraph, {
      propsData: {
        focusArea: {name: 'Punctuality', deleted: false, '@streak': {current: 1, longest: 2}}
      }
    })
    expect(wrapper.find('.focus-area-graph__name').text()).toEqual('Punctuality')
    expect(wrapper.find('.focus-area-graph__current-streak').text()).toEqual('1')
    expect(wrapper.find('.focus-area-graph__longest-streak').text()).toEqual('2')
  })
  it('renders a placeholder for the graph', () => {
    const wrapper = mount(FocusAreaGraph, {
      propsData: {
        focusArea: {id: 'id', name: 'Punctuality', deleted: false}
      }
    })
    expect(wrapper.find('.focus-area-graph__graph--id').exists()).toBeTruthy()
  })
})
