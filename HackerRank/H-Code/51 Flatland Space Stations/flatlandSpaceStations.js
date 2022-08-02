// Terminated due to timeout :(  --   Test Case 15!!!
function flatlandSpaceStations(n, c) {
  let count = 0
  for (let i = 0; i < n; i++) {
    let min = Math.min(...c.map((e) => Math.abs(e - i)))
    if (count < min) {
      count = min
    }
  }
  return count
}
//---------------------------------------------
function flatlandSpaceStations(n, c) {
  //Find distances inbetween spaceStations
  let distances = []
  c.sort((a, b) => a - b)
  for (let i = 0; i < c.length - 1; i++) {
    const distance = Math.floor(Math.abs(c[i + 1] - c[i]) / 2)
    distances.push(distance)
  }
  //Find max distances before and after
  const before = Math.abs(c[0] - 0)
  const after = Math.abs(n - c[c.length - 1]) - 1
  return Math.max(...distances, before, after)
}
