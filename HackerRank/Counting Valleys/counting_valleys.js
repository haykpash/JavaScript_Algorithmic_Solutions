function countingValleys(steps, path) {
  let level = 0
  let valley = 0
  for (let i = 0; i < steps; i++) {
    if (path[i] === 'U') {
      level++
      if (level == 0) {
        valley++
      }
    } else {
      level--
    }
  }
  return valley
}
