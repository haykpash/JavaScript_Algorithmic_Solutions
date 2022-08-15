function weightedUniformStrings(s, queries) {
  let weight = []
  let sum = 0
  for (let i = 0; i < s.length; i++) {
    let w = s[i].charCodeAt() - 96
    if (s[i] === s[i - 1]) {
      sum += w
      weight.push(num)
    } else {
      weight.push(w)
      sum = w
    }
  }
  for (let i = 0; i < queries.length; i++) {
    if (weight.includes(queries[i])) {
      queries[i] = 'Yes'
    } else {
      queries[i] = 'No'
    }
  }
  return queries
}
