import CalHeatMap from 'cal-heatmap'
import 'cal-heatmap/cal-heatmap.css'
import transformEntriesToCalHeatmap from './transform-entries-to-cal-heatmap-format'
import range from './range'

export default (itemSelector, focusAreaEntries) => {
  const data = transformEntriesToCalHeatmap(focusAreaEntries)
  const cal = new CalHeatMap()
  cal.init({
    itemSelector,
    data,
    domain: 'month',
    subdomain: 'day',
    cellSize: 10,
    range: range(),
    start: new Date('2018-12-01'),
    legend: [-0.1, 0, 0.1],
    legendColors: {
      min: 'red',
      max: 'green'
    }
  })
}
