function countingSort(arr) {
  let a = new Array(100).fill(0)
  for (let i = 0; i < arr.length; i++) {
    a[arr[i]]++
  }
  return a
}
//-------------------------------------
function countingSort(arr) {
  let a = new Array(100).fill(0)
  arr.forEach((e) => a[e]++)
  return a
}
