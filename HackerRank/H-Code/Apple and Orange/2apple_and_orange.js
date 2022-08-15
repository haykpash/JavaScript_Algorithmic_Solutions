function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let ai = 0
  let bi = 0

  for (let i = 0; i < apples.length; i++) {
    if (apples[i] + a >= s && apples[i] + a <= t) {
      ai++
    }
  }

  for (let i = 0; i < oranges.length; i++) {
    if (oranges[i] + b >= t && oranges[i] + b >= s) {
      bi++
    }
  }

  console.log(ai)
  console.log(bi)
}
