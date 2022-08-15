function pickingNumbers(a) {
  return Math.max(
    ...a.map((e) => a.filter((ee) => ee == e || ee == e + 1).length)
  )
}
