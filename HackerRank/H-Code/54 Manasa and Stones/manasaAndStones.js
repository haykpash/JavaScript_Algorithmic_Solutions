function stones(n, a, b) {
  let num = new Set()
  for (let i = 0; i < n; i++) {
    num.add(i * a + (n - i - 1) * b)
  }
  return [...num].sort((a, b) => a - b)
}
//--------------------------------------
const stones = (n, a, b) =>
  [
    ...new Set(new Array(n).fill(0).map((e, i) => a * i + b * (n - i - 1))),
  ].sort((a, b) => a - b)
