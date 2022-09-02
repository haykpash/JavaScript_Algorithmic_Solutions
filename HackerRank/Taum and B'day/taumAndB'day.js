function taumBday(b, w, bc, wc, z) {
  b = BigInt(b)
  w = BigInt(w)
  bc = BigInt(bc)
  wc = BigInt(wc)
  z = BigInt(z)

  let minCost = 0
  if (bc + z < wc) {
    minCost = (bc + z) * w + b * bc
  } else if (wc + z < bc) {
    minCost = (wc + z) * b + w * wc
  } else {
    minCost = b * bc + w * wc
  }
  return minCost
}
