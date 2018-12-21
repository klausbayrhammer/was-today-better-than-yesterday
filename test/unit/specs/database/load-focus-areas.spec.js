import {loadFocusAreas} from '@/database/load-focus-areas'

jest.mock('@/database/firebase-db', () => ({
  ref: () => ({
    once: () => Promise.resolve({
      val: () => ({
        '0': {deleted: false, name: 'TDD'},
        '12312': {deleted: false, name: 'PP'}
      })
    })
  })
}))

describe('Load focus areas', () => {
  it('returns transformed focusareas', async () => {
    const focusAreas = await loadFocusAreas()
    expect(focusAreas).toEqual([
      {id: '0', deleted: false, name: 'TDD'},
      {id: '12312', deleted: false, name: 'PP'}
    ])
  })

  xit('invokes the onchange callback with transformed focus areas', () => {

  })
})
