function cutTheSticks(arr) {
  let cuts = []
  while (arr.length != 0) {
    let min = Math.min(...arr)
    cuts.push(arr.length)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] - min === 0) {
        arr.splice(i, 1)
        i--
      } else {
        arr[i] = arr[i] - min
      }
    }
  }
  return cuts
}
//----------------------------
function cutTheSticks(arr) {
  let result = []
  while (arr.length > 0) {
    result.push(arr.length)
    arr.sort((a, b) => a - b)
    let front = arr[0]
    arr.reduce((target, value, index) => {
      arr[index] -= front
      return target
    }, [])
    let remove = arr.lastIndexOf(0) + 1
    arr.splice(0, remove)
  }
  return result
}
