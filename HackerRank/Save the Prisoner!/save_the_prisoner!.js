// function saveThePrisoner(n, m, s) {
//   let seat = s
//   for (let i = 1; i < m; i++) {
//       if (seat === n) {
//           seat = 1
//       } else  {
//           seat++
//       }
//   }
//   return seat
// }

function saveThePrisoner(n, m, s) {
  return (m - 1 + s) % n || n
}
