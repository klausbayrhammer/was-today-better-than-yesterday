import {mount} from '@vue/test-utils'
import FocusAreaList from '@/components/FocusAreaList'

jest.mock('uuid/v4', () => () => 'id1')

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
    expect(wrapper.vm.focusAreas).toEqual([{id: 'id1', deleted: false, editMode: true}])
  })
})
