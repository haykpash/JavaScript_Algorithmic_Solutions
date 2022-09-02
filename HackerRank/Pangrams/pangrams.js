function pangrams(s) {
  let lowC = 'abcdefghijklmnopqrstuvwxyz'
  let p = 0
  for (let i = 0; i < 26; i++) {
    if (s.toLowerCase().includes(lowC[i])) {
      p++
    }
  }
  return p === 26 ? 'pangram' : 'not pangram'
}
//----------------------------------------------
function pangrams(s) {
  return new Set(s.toLowerCase()).size > 26 ? 'pangram' : 'not pangram'
}
