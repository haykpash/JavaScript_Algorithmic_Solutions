function chocolateFeast(n, c, m) {
  let bars = Math.floor(n / c)
  chocolates = bars

  while (bars / m >= 1) {
    let wrapp = Math.floor(bars / m)
    chocolates += wrapp
    bars = wrapp + (bars % m)
  }

  return chocolates
}
