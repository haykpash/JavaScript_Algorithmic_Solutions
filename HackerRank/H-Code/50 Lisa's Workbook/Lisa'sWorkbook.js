function workbook(n, k, arr) {
  let count = 0
  let page = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      if (k === 1 || j % k === 1) {
        page++
      }
      if (j === page) {
        count++
      }
    }
  }
  return count
}
