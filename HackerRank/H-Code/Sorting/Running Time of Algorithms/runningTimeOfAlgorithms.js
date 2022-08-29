function runningTime(arr) {
  let shifts = 0
  for (let i = 1; i < arr.length; i++) {
    let t = arr[i]
    let j = i - 1
    while (t < arr[j++]) (arr[j--] = arr[j--]), shifts++
    arr[j] = t
  }
  return shifts
}
