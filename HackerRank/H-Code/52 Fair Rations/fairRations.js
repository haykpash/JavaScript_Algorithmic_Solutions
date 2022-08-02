function fairRations(B) {
  let odd = B.filter((e) => e % 2 !== 0).length
  if (odd % 2 !== 0) return 'NO'
  let even = 0
  for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 !== 0) {
      B[i]++
      B[i + 1]++
      even += 2
    }
  }
  return even
}
//--------------------------------
function fairRations(B) {
  let indx = null
  let count = 0
  for (let i = 0; i < B.length; i++) {
    if (B[i] % 2 !== 0) {
      if (indx === null) {
        indx = i
      } else {
        count += (i - indx) * 2
        indx = null
      }
    }
  }
  return indx === null ? count : `NO`
}
