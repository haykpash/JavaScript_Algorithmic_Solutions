function timeConversion(s) {
  let lastLtters = s.substring(8)
  let fullTime = s.substring(0, 8)
  let times = fullTime.split(':')

  if (lastLtters === 'PM') {
    if (times[0] !== '12') {
      times[0] = Number(times[0]) + 12
    }
  } else {
    if (times[0] === '12') {
      times[0] = '00'
    }
  }
  return times.join(':')
}
