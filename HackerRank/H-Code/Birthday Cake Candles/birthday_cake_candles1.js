function birthdayCakeCandles(candles) {
  let sum = 0
  let max = Math.max(...candles)
  for (const i in candles)
    if (candles[i] === max) {
      sum++
    }
  return sum
}
