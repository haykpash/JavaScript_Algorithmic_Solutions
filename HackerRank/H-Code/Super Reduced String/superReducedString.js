function superReducedString(s) {
  s = [...s]
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s.splice(i, 2)
      i < 1 ? i-- : (i -= 2)
    }
  }
  s = s.join('')
  return s.length ? s : 'Empty String'
}
//--------------------------------------
function superReducedString(s) {
  s.split('')
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      s.splice(i, 2)
      i < 1 ? i-- : (i -= 2)
    }
  }
  s = s.join('')
  return s || 'Empty String'
}
