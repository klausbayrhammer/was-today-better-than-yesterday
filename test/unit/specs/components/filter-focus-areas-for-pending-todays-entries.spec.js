import filterFocusAreasForPendingTodaysEntries from '@/components/filter-focus-areas-for-pending-todays-entries'

function focusAreaWithTodaysEntry () {
  const entry = {id: 'id-deleted', deleted: false, entries: {'2018-12-21': 0}}
  entry.entries[new Date().toISOString().split('T')[0]] = 0
  return entry
}

describe('filter-focus-areas-for-pending-todays-entries', () => {
  it('returns the empty array if no focus areas are given', () => {
    expect(filterFocusAreasForPendingTodaysEntries([])).toEqual(undefined)
  })

  it('returns focus area if deleted is not specified', () => {
    expect(filterFocusAreasForPendingTodaysEntries([
      {id: 'id'}
    ])).toEqual({id: 'id'})
  })

  it('filters focus areas marked as deleted', () => {
    expect(filterFocusAreasForPendingTodaysEntries([
      {id: 'id-deleted', deleted: true},
      {id: 'id', deleted: false}
    ])).toEqual({id: 'id', deleted: false})
  })

  it('filters focus areas where there exists an entry for today', () => {
    expect(filterFocusAreasForPendingTodaysEntries([
      focusAreaWithTodaysEntry(),
      {id: 'id', deleted: false}
    ])).toEqual({id: 'id', deleted: false})
  })
})
