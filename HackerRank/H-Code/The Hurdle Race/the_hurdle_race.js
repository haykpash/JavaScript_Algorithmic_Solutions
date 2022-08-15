function hurdleRace(k, height) {
  let maxHurdle = Math.max(...height)
  return k < maxHurdle ? maxHurdle - k : 0
}
