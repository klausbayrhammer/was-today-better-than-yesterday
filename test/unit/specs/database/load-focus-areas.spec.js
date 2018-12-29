import {onChange} from '@/database/load-focus-areas'

let mockOnValueCallback

jest.mock('@/database/firebase-db', () => ({
  ref: () => ({
    on: (_, cb) => {
      mockOnValueCallback = cb
    }
  })
})
)

describe('Load focus areas', () => {
  it('returns transformed focusareas', done => {
    onChange(focusAreas => {
      expect(focusAreas).toEqual([
        {id: '0', deleted: false, name: 'TDD'},
        {id: '12312', deleted: false, name: 'PP'}
      ])
      done()
    })

    mockOnValueCallback({
      val: () => ({
        '0': {deleted: false, name: 'TDD'},
        '12312': {deleted: false, name: 'PP'}
      })
    })
  })
})
