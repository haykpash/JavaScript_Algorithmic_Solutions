function countingSort(arr) {
  let a = new Array(Math.max(...arr) + 1).fill(0)
  arr.forEach((e) => a[e]++)
  let output = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== 0) {
      for (let j = 0; j < a[i]; j++) {
        output.push(i)
      }
    }
  }
  return output
}
//--------------------------------------------
function countingSort(arr) {
  const a = Array(100).fill(0),
    output = []
  arr.forEach((e) => a[e]++)
  a.forEach((e, i) => output.push(...Array(e).fill(i)))
  return output
}
