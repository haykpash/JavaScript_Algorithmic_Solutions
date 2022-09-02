function pageCount(n, p) {
  const totalTurns = Math.floor(n / 2)
  const pageTurns = Math.floor(p / 2)

  return Math.min(totalTurns - pageTurns, pageTurns)
}
