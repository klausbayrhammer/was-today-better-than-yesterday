import {mount} from '@vue/test-utils'
import FocusAreaGraph from '@/components/FocusAreaGaph'

describe('FocusAreaGraph.vue', () => {
  it('should render the focus are name', () => {
    const wrapper = mount(FocusAreaGraph, {
      propsData: {
        focusArea: {name: 'Punctuality', deleted: false}
      }
    })
    expect(wrapper.find('.focus-area-graph__name').text()).toEqual('Punctuality')
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
