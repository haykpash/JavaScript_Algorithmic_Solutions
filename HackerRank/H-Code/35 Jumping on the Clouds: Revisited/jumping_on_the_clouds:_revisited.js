function jumpingOnClouds(c, k) {
  let p = 100
  let i = 0
  do {
    p -= c[i] == 1 ? 3 : 1
    i = (i + k) % c.length
  } while (i != 0)
  return p
}
