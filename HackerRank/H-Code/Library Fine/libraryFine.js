function libraryFine(d1, m1, y1, d2, m2, y2) {
  if ((d1 <= d2 && m1 <= m2 && y1 <= y2) || y1 < y2 || (d1 > d2 && m1 < m2)) {
    return 0
  } else if (d1 > d2 && m1 == m2 && y1 == y2) {
    return (d1 - d2) * 15
  } else if (m1 >= m2 && y1 == y2) {
    return (m1 - m2) * 500
  } else if (
    (d1 >= d2 && m1 >= m2 && y1 > y2) ||
    (d1 < d2 && m1 < m2 && y1 > y2)
  ) {
    return 10000
  }
}
//----------------------------------------
function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) return 10000
  if (y1 === y2 && m1 > m2) return (m1 - m2) * 500
  if (y1 === y2 && m1 === m2 && d1 > d2) return (d1 - d2) * 15
  return 0
}
