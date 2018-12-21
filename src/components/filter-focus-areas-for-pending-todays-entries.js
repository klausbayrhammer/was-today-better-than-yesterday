export default focusAreas => {
  return focusAreas.find(({entries = [], deleted}) => !deleted && !entries.hasOwnProperty(getTodaysDate()))
}

function getTodaysDate () {
  return new Date().toISOString().split('T')[0]
}
