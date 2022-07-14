function findDigits(n) {
  let digits = n.toString().split('')
  let divisible = []

  for (let i = 0; i <= digits.length; i++) {
    if (n % digits[i] == 0) divisible++
  }
  return divisible
}
//--------------------------------------------
function findDigits(n) {
  let digits = n
    .toString()
    .split('')
    .filter((e) => n % e == 0)
  return digits.length
}
