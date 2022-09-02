function jumpingOnClouds(c) {
  let jump = 0
  for (let i = 0; i < c.length; i += 2) {
    if (i == c.length - 1) {
      return jump
    } else if (c[i] === 0) {
      jump++
    } else if (c[i] === 1) {
      jump++
      i--
    } else if (c[i] === undefined) {
      jump++
      return jump
    }
  }
  return jump
}
//----------------------------------------------
function jumpingOnClouds(c) {
  let count = -1
  for (let i = 0; i < c.length; i++, count++) {
    if (i < c.length - 2 && c[i + 2] == 0) i++
  }
  return count
}
//-----------------------------------------------
function jumpingOnClouds(c) {
  let jumps = 0
  for (let i = 0; i < c.length - 1; jumps++) {
    i += c[i + 2] === 0 ? 2 : 1
  }
  return jumps
}
