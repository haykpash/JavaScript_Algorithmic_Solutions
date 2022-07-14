function timeInSeconds(X) {
  let week = 604800
  let day = 86400
  let hour = 3600
  let minute = 60
  if (X < minute) {
    return `${X}s`
  } else if (X >= minute && X < hour) {
    let m = Math.floor(X / minute)
    let s = Math.ceil(X - m * minute)
    return `${m}m${s}s`
  } else if (X >= hour && X < day) {
    let h = Math.floor(X / hour)
    let m = Math.ceil((X - h * hour) / minute)
    return `${h}h${m}m`
  } else if (X >= day && X < week) {
    let d = Math.floor(X / day)
    let h = Math.ceil((X - d * day) / hour)
    return `${d}d${h}h`
  } else if (X > week) {
    let w = Math.floor(X / week)
    let d = Math.ceil((X - w * week) / day)
    return `${w}w${d}d`
  }
}
let f = timeInSeconds(1203)
console.log(f)
