function gemstones(arr) {
  arr.sort((a, b) => a.length - b.length)
  let piv = [...new Set(arr[0])]
  for (let i = 0; i < piv.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (!arr[j].includes(piv[i])) {
        piv[i] = 0
      }
    }
  }
  return piv.filter((e) => e !== 0).length
}
//----------------------------------------
function gemstones(arr) {
  let gems = 0
  let piv = [...new Set(arr[0])]
  for (let i = 0; i < piv.length; i++) {
    if (arr.every((k) => k.includes(piv[i]))) {
      gems++
    }
  }
  return gems
}
//------------------------------------------
function gemstones(arr) {
  let gems = 0
  let piv = new Set(arr[0])

  for (let e of piv) {
    if (arr.every((k) => k.includes(e))) {
      gems++
    }
  }
  return gems
}
