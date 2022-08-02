function happyLadybugs(b) {
  return (b.includes('_')
    ? [...b].sort().filter((c) => c != '_')
    : [...b]
  ).every((c, i, a) => c == a[i + 1] || c == a[i - 1])
    ? 'YES'
    : 'NO'
}
//-----------------------------------------
function happyLadybugs(b) {
  return (b.includes('_')
    ? b
        .split('')
        .sort()
        .filter((c) => c != '_')
    : b.split('')
  ).every((c, i, a) => c == a[i + 1] || c == a[i - 1])
    ? 'YES'
    : 'NO'
}
