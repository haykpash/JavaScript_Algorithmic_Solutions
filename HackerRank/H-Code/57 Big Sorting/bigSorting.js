function bigSorting(unsorted) {
  unsorted.sort()
  unsorted.sort((a, b) => a.length - b.length)
  return unsorted
}
//-------------------------------------------
function bigSorting(unsorted) {
  return unsorted.sort().sort((a, b) => a.length - b.length)
}
