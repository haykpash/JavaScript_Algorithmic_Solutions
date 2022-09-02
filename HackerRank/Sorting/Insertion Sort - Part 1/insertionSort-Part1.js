function insertionSort1(n, arr) {
  let t = arr[n - 1]
  while (arr[--n - 1] > t) (arr[n] = arr[n - 1]), console.log(...arr)
  ;(arr[n] = t), console.log(...arr)
}
//
function insertionSort1(n, arr) {
  let t = arr[n - 1]
  while (arr[--n - 1] > t) {
    arr[n] = arr[n - 1]
    console.log(...arr)
  }
  ;(arr[n] = t), console.log(...arr)
}
