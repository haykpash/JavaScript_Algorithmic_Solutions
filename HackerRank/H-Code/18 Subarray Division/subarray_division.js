function birthday(s, d, m) {
  let count = 0
  s.map((e, i) => {
    let arr = s.slice(0 + i, m + i)

    if (arr.reduce((a, b) => a + b) === d) {
      count++
    }
  })
  return count
}
