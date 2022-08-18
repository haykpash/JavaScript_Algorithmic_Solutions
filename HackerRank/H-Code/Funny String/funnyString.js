function funnyString(s) {
  s = [...s].map((e) => e.charCodeAt())
  let r = s.slice().reverse()
  for (let i = 1; i < s.length; i++) {
    if (Math.abs(s[i] - s[i - 1]) !== Math.abs(r[i] - r[i - 1])) {
      return 'Not Funny'
    }
  }
  return 'Funny'
}
