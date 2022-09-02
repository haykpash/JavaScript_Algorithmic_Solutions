function getTotalX(a, b) {
  let nCount = 0

  for (let n = 0; n <= 100; n++) {
    if (a.every((e) => n % e == 0)) {
      if (b.every((e) => e % n == 0)) {
        nCount++
      }
    }
  }

  return nCount
}
