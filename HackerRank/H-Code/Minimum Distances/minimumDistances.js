function minimumDistances(a) {
  let min = []
  for (let i = 0; i < a.length; i++) {
    if (a.includes(a[i], i + 1)) {
      min.push(a.indexOf(a[i], i + 1) - i)
    }
  }
  return min.length !== 0 ? Math.min(...min) : -1
}
