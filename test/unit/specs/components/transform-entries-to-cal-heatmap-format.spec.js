import transform from '@/components/transform-entries-to-cal-heatmap-format'

describe('transform-entries-to-cal-heatmap-format', () => {
  it('transforms data entries to cal-heatmap specific format', () => {
    expect(transform({'2012-01-01': 1})).toEqual({1325376000: 1})
  })
  it('removes entries with value zero', () => {
    expect(transform({'2012-01-01': 0})).toEqual({})
  })
  it('does not fail on empty entries', () => {
    expect(transform()).toEqual({})
  })
})
