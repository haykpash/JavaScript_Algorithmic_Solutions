function camelcase(s) {
  return [...s].filter((e) => e.toUpperCase() === e).length + 1
}
//-------------------------------------
function camelcase(s) {
  let l = 1
  for (let i = 0; i < s.length; i++) {
    if (s[i].toUpperCase() === s[i]) l++
  }
  return l
}
