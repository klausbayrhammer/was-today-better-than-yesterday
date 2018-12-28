import {mount} from '@vue/test-utils'
import FocusAreaGraphList from '@/components/FocusAreaGaphList'

jest.mock('@/components/cal-heatmap', () => ({
  __esModule: true,
  default: () => {}
}))
describe('FocusAreaGraphList.vue', () => {
  it('should render all focus area graphs', () => {
    const wrapper = mount(FocusAreaGraphList, {
      propsData: {
        focusAreas: [
          {name: 'Punctuality', deleted: false},
          {name: 'TDD', deleted: false}
        ]
      }
    })
    expect(wrapper.findAll('.focus-area-graph').length).toEqual(2)
  })
})
