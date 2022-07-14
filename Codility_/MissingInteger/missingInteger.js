function solution(A) {
  let minNum = 1
  A.sort((a, b) => a - b)

  for (let i = 0; i < A.length; i++) {
    if (A[i] > 0 && A[i] === minNum) {
      minNum++
    }
  }
  return minNum
}
