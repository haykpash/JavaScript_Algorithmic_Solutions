function acmTeam(topic) {
  let count = 1
  let maxNum = 0
  topic.forEach((e, i, a) => {
    a.slice(i + 1).forEach((ee) => {
      let newCount = [...e].reduce((c, e, i) => {
        return c + (e === '1' || ee.charAt(i) === '1')
      }, 0)
      if (newCount > maxNum) {
        maxNum = newCount
        count = 1
      } else {
        count += newCount === maxNum
      }
    })
  })
  return [maxNum, count]
}
