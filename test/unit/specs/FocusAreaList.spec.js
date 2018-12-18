import {mount} from '@vue/test-utils'
import FocusAreaList from '@/components/FocusAreaList'

describe('FocusAreaList.vue', () => {
  it('should render all focus points', () => {
    const wrapper = mount(FocusAreaList, {
      propsData: {
        initialFocusAreas: [
          {name: 'Punctuality', deleted: false},
          {name: 'TDD', deleted: false}
        ]
      }
    })
    expect(wrapper.findAll('.focus-area').length).toEqual(2)
  })

  it('adds a new focus area when clicking on add', () => {
    const wrapper = mount(FocusAreaList, {
      propsData: {
        initialFocusAreas: []
      }
    })
    wrapper.find('.focus-area-list__add-focus-area').trigger('click')
    expect(wrapper.findAll('.focus-area').length).toEqual(1)
  })
})
