function getMoneySpent(keyboards, drives, b) {
  let max = -1

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] > max && keyboards[i] + drives[j] <= b) {
        max = keyboards[i] + drives[j]
      }
    }
  }
  return max
}
// function getMoneySpent(keyboards, drives, b) {
//   let max = -1
//   for (let i of keyboards) {
//     for (let j of drives) {
//       let sum = i + j
//       if (sum > max && sum <= b) {
//         max = sum
//       }
//     }
//   }
//   return max
// }
