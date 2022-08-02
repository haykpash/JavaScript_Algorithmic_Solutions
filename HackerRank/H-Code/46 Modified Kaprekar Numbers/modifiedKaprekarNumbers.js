function kaprekarNumbers(p, q) {
  let nums = ''
  for (let i = p; i <= q; i++) {
    let ii = (i * i).toString()
    let first = Number(ii.substring(0, ii.length / 2))
    let last = Number(ii.substring(ii.length / 2))
    if (first + last === i) {
      nums += `${i} `
    }
  }
  console.log(nums.length > 0 ? nums : 'INVALID RANGE')
}
