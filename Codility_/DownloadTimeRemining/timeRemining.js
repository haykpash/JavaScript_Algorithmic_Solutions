const timeReminig = (X, B, Z) => {
  let sumB = B.reduce((a, b) => a + b, 0)
  if (X === sumB) return 0
  let remain = X - sumB

  let avarage = B.slice(-Z).reduce((a, b) => a + b) / Z

  return Math.ceil(remain / avarage)
}
let X = 100
let B = [10, 6, 6, 8]
let Z = 2
let f = timeReminig(X, B, Z)
console.log(f)
