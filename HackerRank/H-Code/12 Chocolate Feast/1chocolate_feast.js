function chocolateFeast(n, c, m) {
  let bars = Math.floor(n / c)
  return bars + Math.ceil(bars / (m - 1)) - 1
}
