function caesarCipher(s, k) {
  let encrypted = ''
  for (let i = 0; i < s.length; i++) {
    if (/[A-Z]/.test(`${s[i]}`)) {
      let rot = String.fromCharCode(
        s[i].charCodeAt() + k > 90
          ? ((s[i].charCodeAt() - 65 + k) % 26) + 65
          : s[i].charCodeAt() + k
      )
      encrypted += rot
    } else if (/[a-z]/.test(`${s[i]}`)) {
      let rot = String.fromCharCode(
        s[i].charCodeAt() + k > 122
          ? ((s[i].charCodeAt() - 97 + k) % 26) + 97
          : s[i].charCodeAt() + k
      )
      encrypted += rot
    } else {
      encrypted += s[i]
    }
  }
  return encrypted
}
//-------------------------------------------------------
function caesarCipher(s, k) {
  s = [...s]
  k = k > 25 ? k % 26 : k
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  alphabet = alphabet.slice(k) + alphabet.slice(0, k)
  for (let i = 0; i < s.length; i++) {
    if (/[a-zA-Z]/.test(s[i])) {
      let index = s[i].charCodeAt(0) - 97
      if (index < 0) {
        index = s[i].charCodeAt(0) - 65
        s[i] = alphabet[index].toUpperCase()
      } else {
        s[i] = alphabet[index]
      }
    }
  }
  return s.join('')
}
