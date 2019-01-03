function getLatestEntryDate (a) {
  if (!a.entries) {
    return 0
  }
  const keysWithoutEntriesValueZero = Object.keys(a.entries).filter(key => a.entries[key] !== 0)
  if (keysWithoutEntriesValueZero.length === 0) {
    return 0
  }
  return new Date(keysWithoutEntriesValueZero.sort()[keysWithoutEntriesValueZero.length - 1])
}

export default entries => entries.sort((a, b) => getLatestEntryDate(b) - getLatestEntryDate(a))
