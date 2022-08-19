function beautifulBinaryString(b) {
  let m = 0
  for (let i = 0; i < b.length; i++) {
    console.log(i)
    if (b[i] === '0' && b[i + 1] === '1' && b[i + 2] === '0') {
      m++
      i += 2
    }
  }
  return m
}
//---------------------------------
function beautifulBinaryString(b) {
  return (b.match(/[0][1][0]/g) || []).length
}
//----------------------------------
function beautifulBinaryString(b) {
  return b.match(/(010)/g) ? b.match(/(010)/g).length : 0
}
