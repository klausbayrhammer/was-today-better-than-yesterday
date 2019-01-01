import range from '@/components/cal-heatmap/range'

describe('range.js', () => {
  it('shows 12 entries on desktop width', function () {
    window.innerWidth = 1024
    expect(range()).toEqual(12)
  })
  it('shows 4 entries on desktop width', function () {
    window.innerWidth = 640
    expect(range()).toEqual(4)
  })
})
