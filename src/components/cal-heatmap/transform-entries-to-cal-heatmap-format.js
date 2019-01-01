export default (entries = {}) =>
  Object.keys(entries)
    .filter(key => entries[key] !== 0)
    .reduce((result, key) => {
      result[new Date(key).getTime() / 1000] = entries[key]
      return result
    }, {})
