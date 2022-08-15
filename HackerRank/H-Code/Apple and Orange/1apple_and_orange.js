function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let ai = 0
  let bi = 0

  apples.map((e) => {
    if (e + a >= s && e + a <= t) {
      ai++
    }
  })
  oranges.map((e) => {
    if (e + b <= t && e + b >= s) {
      bi++
    }
  })

  console.log(ai)
  console.log(bi)
}
