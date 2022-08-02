function howManyGames(p, d, m, s) {
  if (p > s) return 0
  let output = 1
  s = s - p
  p = p - d
  while (s >= m && s >= p) {
    if (p > m) {
      s = s - p
      p = p - d
    } else {
      s = s - m
    }
    output++
  }
  return output
}
//------------------------------
function howManyGames(p, d, m, s) {
  let output = 0
  while (s >= p) {
    output++
    s -= p
    p - d > m ? (p -= d) : (p = m)
  }
  return output
}
