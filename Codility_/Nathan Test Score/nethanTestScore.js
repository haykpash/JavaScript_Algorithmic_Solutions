function solution(T, R) {
  let res = 0
  let nums = [...new Set(T.map((e) => e.match(/\d/g).toString()))]
  for (let i = 0; i < nums.length; i++) {
    T.map((e, ii) => (e.includes(nums[i]) ? R[ii] : null)).every(
      (e) => e === 'OK' || e === null
    )
      ? res++
      : res
  }
  return Math.round((res * 100) / nums.length)
}
