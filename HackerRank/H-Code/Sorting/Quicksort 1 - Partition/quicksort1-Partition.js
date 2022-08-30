function quickSort(arr) {
  let left = []
  let right = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...left, arr[0], ...right]
}
//-----------------------------------
function quickSort(arr) {
  const a = [[], [], []]
  arr.forEach((e) => a[(e > arr[0]) + (e >= arr[0])].push(e))
  return a.flat()
}
