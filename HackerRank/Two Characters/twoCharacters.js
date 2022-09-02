function alternate(s) {
  let max = 0
  let arr = [...new Set(s)]
  let alter
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      alter = [...s].filter((v) => v == arr[i] || v == arr[j])
      if (
        alter.every((v, i) => {
          return i % 2 ? v == alter[1] : v == alter[0]
        })
      ) {
        max = Math.max(alter.length, max)
      }
    }
  }
  return max
}
