function repeatedString(s, n) {
  let ays = [...s].filter((e) => e == 'a').length
  let length = s.length
  let num = Math.floor(n / length)
  let output = 0
  if (length > n) {
    for (let i = 0; i < n; i++) {
      if (s[i] == 'a') {
        // --- more option ---  if (s.charAt(i) == 'a')
        output++
      }
    }
  } else if (num !== n) {
    let last = n % num
    output = ((n - last) / length) * ays
    for (let i = 0; i < last; i++) {
      if (s[i] == 'a') {
        output++
      }
    }
  } else {
    output = (num / length) * ays
  }
  return output
}
