function marsExploration(s) {
  let c = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== 'SOS'[i % 3]) {
      c++
    }
  }
  return c
}
//------------------------------------------
function marsExploration(s) {
  return [...s].filter((e, i) => e !== 'SOS'[i % 3]).length
}
//------------------------------------------
function marsExploration(s) {
  return [...s].reduce(
    (acc, cur, i) => (acc += cur !== 'SOS'[i % 3] ? 1 : null),
    0
  )
}
//------------------------------------------
function hackerrankInString(s) {
  return /.*h.*a.*c.*k.*e.*r.*r.*a.*n.*k/.test(s) ? 'YES' : 'NO'
}
