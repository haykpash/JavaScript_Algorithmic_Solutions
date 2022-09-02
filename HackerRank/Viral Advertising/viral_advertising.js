function viralAdvertising(n) {
  let shared = 5
  let cumulative = 0
  for (let i = 1; i <= n; i++) {
    let liked = Math.floor(shared / 2)
    shared = liked * 3
    cumulative += liked
  }
  return cumulative
}
