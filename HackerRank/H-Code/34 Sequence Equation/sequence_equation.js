function permutationEquation(p) {
  let y = []
  for (let i = 0; i < p.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (i + 1 === p[j]) {
        for (let k = 0; k < p.length; k++) {
          if (j + 1 === p[k]) {
            y.push(k + 1)
          }
        }
      }
    }
  }
  return y
}
//-----------------------------------------------
function permutationEquation(p) {
  var arr = []
  for (let i = 1; i <= p.length; i++) {
    arr.push(p.indexOf(p.indexOf(i) + 1) + 1)
  }
  return arr
}
//------------------------------------------------
function permutationEquation(p) {
  return p.map((e, i) => p.indexOf(p.indexOf(i + 1) + 1) + 1)
}
