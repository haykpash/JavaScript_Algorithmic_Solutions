function miniMaxSum(arr) {
  const sum = arr.reduce((acc, next) => acc + next)
  let min, max
  min = sum - Math.max(...arr)
  max = sum - Math.min(...arr)

  console.log(min, max)
}
