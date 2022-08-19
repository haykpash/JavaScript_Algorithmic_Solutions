function alternatingCharacters(s) {
  s = [...s]
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s[i] = 0
    }
  }
  return s.filter((e) => e === 0).length
}
//--------------------------------------
function alternatingCharacters(s) {
  s = [...s]
  let del = 0
  s.forEach((e, i) => {
    if (e === s[i + 1]) del++
  })
  return del
}
