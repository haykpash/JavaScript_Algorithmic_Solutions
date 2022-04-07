function migratoryBirds(arr) {
  //let bigNumber = Math.max(...arr)
  let types = Array(5).fill(0)
  let max = 0
  let indx = -1

  arr.map((e) => {
    types[e - 1]++
  })
  types.map((e, i) => {
    if (max < e) {
      max = e
      indx = i
    }
  })
  return indx + 1
}
//----------------------#2----------
function migratoryBirds(arr) {
  let types = Array(arr.length).fill(0)
  let max = 0
  let indx = -1

  arr.map((e) => {
    types[e]++
  })
  types.map((e, i) => {
    if (max < e) {
      max = e
      indx = i
    }
  })
  return indx
}
