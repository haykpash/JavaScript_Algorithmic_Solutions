//----------------#1-------------
function simpleArraySum(ar) {
  return ar.reduce((total, currentValue) => total + currentValue)
}
//-------------#2----------------
function simpleArraySum(ar) {
  let sum = 0
  ar.map((i) => {
    sum += i
  })

  return sum
}
