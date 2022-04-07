function circularArrayRotation(a, k, queries) {
  let b = []
  for (let i = 0; i < k; i++) {
    a.unshift(a.pop())
  }
  for (let i = 0; i < queries.length; i++) {
    b.push(a[queries[i]])
  }
  return b
}
//----------------------------------------------------
function circularArrayRotation(a, k, queries) {
  const l = a.length
  const i = l - (k % l)
  return queries.map((q) => a[(q + i) % l])
}
