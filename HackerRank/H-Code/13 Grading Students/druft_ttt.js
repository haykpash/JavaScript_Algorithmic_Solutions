function gradingStudents(grades) {
  grades.map((e, i, g) => {
    if (Math.ceil(e[i] / 5) * 5 - e[i] < 3 && e[i] > 40) {
      return Math.ceil(e[i] / 5) * 5
    } else if (Math.ceil(e[i] / 5) * 5 - e[i] >= 3) {
      return e[i]
    } else if (e[i] <= 40) {
      return e[i]
    }
    return
  })
  return
}
let n = [73, 67, 38, 33]

console.log(gradingStudents(n))
