function breakingRecords(scores) {
  let h = [scores[0]]
  let l = [scores[0]]
  scores.forEach((e) => {
    if (e > h[h.length - 1]) h.push(e)
    if (e < l[l.length - 1]) l.push(e)
  })
  return [h.length - 1, l.length - 1]
}
