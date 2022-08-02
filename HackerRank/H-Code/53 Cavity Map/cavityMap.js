function cavityMap(grid) {
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid.length - 1; j++) {
      if (
        grid[i][j] > grid[i - 1][j] &&
        grid[i][j] > grid[i + 1][j] &&
        grid[i][j] > grid[i][j - 1] &&
        grid[i][j] > grid[i][j + 1]
      ) {
        let str =
          grid[i].substring(0, j) + 'X' + grid[i].substring(j + 1, grid.length)
        grid[i] = str
      }
    }
  }
  return grid
}
//-----------------------------------------------
function cavityMap(grid) {
  for (let i = 1; i < grid.length - 1; i++) {
    for (let j = 1; j < grid.length - 1; j++) {
      if (
        grid[i][j] > grid[i - 1][j] &&
        grid[i][j] > grid[i + 1][j] &&
        grid[i][j] > grid[i][j - 1] &&
        grid[i][j] > grid[i][j + 1]
      ) {
        let str = `${grid[i].substring(0, j)}X${grid[i].substring(
          j + 1,
          grid.length
        )}`
        grid[i] = str
      }
    }
  }
  return grid
}
