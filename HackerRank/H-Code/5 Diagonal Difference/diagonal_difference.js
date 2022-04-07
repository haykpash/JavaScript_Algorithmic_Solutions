function diagonalDifference(arr) {
  let diff = 0
  arr.map((e, i, a) => {
    diff += a[i][i]
    diff -= a[i][a.length - i - 1]
  })
  return Math.abs(diff)
}
