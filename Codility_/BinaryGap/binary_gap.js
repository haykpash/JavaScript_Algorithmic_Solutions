const binaryGap = (n) => {
  let binNum = n.toString(2)
  let started = false
  let counter = 0
  let maxCount = 0
  for (let i = 0; i < binNum.length; i++) {
    let sub = binNum.substring(i, i + 1)
    if (sub == '1') {
      if (started) {
        if (counter > maxCount) {
          maxCount = counter
        }
      }
      counter = 0
      started = true
    }
    if (sub == '0') {
      counter++
    }
  }
  return maxCount
}
