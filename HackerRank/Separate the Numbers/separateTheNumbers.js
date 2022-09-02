function separateNumbers(s) {
  for (let i = 1; i <= Math.floor(s.length / 2); i++) {
    let start = s.slice(0, i)
    let cur = BigInt(start)
    let acc = ''
    while (acc.length < s.length) {
      acc += cur++
      if (acc === s) return console.log('YES', start)
    }
  }
  console.log('NO')
}
