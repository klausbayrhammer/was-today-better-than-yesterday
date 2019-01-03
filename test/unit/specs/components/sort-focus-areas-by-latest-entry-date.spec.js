import sortFocusAreasByLatestEntry from '@/components/sort-focus-areas-by-latest-entry'

describe('sort-focus-areas-by-latest-entry', () => {
  it('sorts the focus areas by latest entry', () => {
    expect(sortFocusAreasByLatestEntry([
      {id: 2, entries: {'2018-01-01': 1}},
      {id: 1, entries: {'2018-02-02': 1}}
    ])).toEqual([
      {id: 1, entries: {'2018-02-02': 1}},
      {id: 2, entries: {'2018-01-01': 1}}
    ])
  })
  it('ignores entries with value 0', () => {
    expect(sortFocusAreasByLatestEntry([
      {id: 2, entries: {'2018-01-01': 1, '2018-03-03': 0}},
      {id: 1, entries: {'2018-02-02': 1}}
    ])).toEqual([
      {id: 1, entries: {'2018-02-02': 1}},
      {id: 2, entries: {'2018-01-01': 1, '2018-03-03': 0}}
    ])
  })
  it('does not fail without entries', () => {
    expect(sortFocusAreasByLatestEntry([
      {id: 2, entries: {'2018-01-01': 1}},
      {id: 1}
    ])).toEqual([
      {id: 2, entries: {'2018-01-01': 1}},
      {id: 1}
    ])
  })
  it('moves focus areas with entries only containing value 0 to the end of the list', () => {
    expect(sortFocusAreasByLatestEntry([
      {id: 1, entries: {'2018-02-02': 0}},
      {id: 2, entries: {'2018-01-01': 1}}
    ])).toEqual([
      {id: 2, entries: {'2018-01-01': 1}},
      {id: 1, entries: {'2018-02-02': 0}}
    ])
  })
})
