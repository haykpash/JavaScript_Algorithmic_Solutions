function equalizeArray(arr) {
  let newArr = new Array(101).fill(0)
  for (let i = 0; i < arr.length; i++) {
    newArr[arr[i]] += 1
  }
  return arr.length - Math.max(...newArr)
}
//---------------------------
function equalizeArray(arr) {
  return (
    arr.length -
    Math.max(
      ...Object.values(
        arr.reduce((p, c) => {
          p[c] = p[c] ? ++p[c] : 1
          return p
        }, {})
      )
    )
  )
}
//---------------------------
function equalizeArray(arr) {
  return (
    arr.length -
    Math.max(
      ...Object.values(
        arr.reduce((acc, cur) => {
          if (cur in acc) {
            acc[cur]++
          } else {
            acc[cur] = 1
          }
          return acc
        }, {})
      )
    )
  )
}
