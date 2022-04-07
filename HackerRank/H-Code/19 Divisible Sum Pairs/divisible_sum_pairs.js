//----------------#1-------------------
function divisibleSumPairs(n, k, ar) {
  let count = 0
  ar.map((e1, i) => {
    ar.map((e2, j) => {
      if (i < j && (e1 + e2) % k === 0) {
        count++
      }
    })
  })
  return count
}

//----------------#2-------------------

function divisibleSumPairs(n, k, ar) {
  let count = 0
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        count++
      }
    }
  }
  return count
}
