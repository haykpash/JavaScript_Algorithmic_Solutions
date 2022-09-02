// Case #1
function gradingStudents(grades) {
  return grades.map((n) => {
    let diff = 5 - (n % 5)
    if (diff < 3 && n >= 38) {
      n += diff
    }
    return n
  })
}
let n = [73, 67, 38, 33]

console.log(gradingStudents(n))

//Case #2
//return grades.map((g) => (g < 38 || g % 5 < 3 ? g : Math.ceil(g / 5) * 5))
//Case #3
//return grades.map((g) => (g < 38 || g % 5 < 3 ? g : g + (5 - (g % 5))))
