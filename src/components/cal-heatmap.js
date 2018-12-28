import CalHeatMap from 'cal-heatmap'
import 'cal-heatmap/cal-heatmap.css'

export default (itemSelector, data) => {
  const cal = new CalHeatMap()
  cal.init({
    itemSelector,
    data,
    domain: 'month',
    subdomain: 'day',
    cellSize: 10,
    range: 12,
    start: new Date('2018-11-11'),
    legend: [-0.1, 0, 0.1],
    legendColors: {
      min: 'red',
      max: 'green'
    }
  })
}
