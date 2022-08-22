function solution(A) {
  for (let i = 0; i < A.length; i++) {
    let len = [...new Set(A)]
    for (let j = 0; j <= A.length - len.length; j++) {
      let sub = A.slice(0 + j, len.length + j + i)
      if (len.every((e) => sub.includes(e))) {
        return sub.length
      }
    }
  }
}
