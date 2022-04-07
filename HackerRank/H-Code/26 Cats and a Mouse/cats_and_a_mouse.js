const catAndMouse = (x, y, z) => {
  const distanceCatA = Math.abs(x - z)
  const distanceCatB = Math.abs(y - z)

  if (distanceCatA === distanceCatB) {
    return 'Mouse C'
  } else if (distanceCatA < distanceCatB) {
    return 'Cat A'
  } else {
    return 'Cat B'
  }
}
// function catAndMouse(x, y, z) {
//   return Math.abs(x - z) > Math.abs(y - z)
//     ? 'Cat B'
//     : Math.abs(x - z) < Math.abs(y - z)
//     ? 'Cat A'
//     : 'Mouse C'
// }
