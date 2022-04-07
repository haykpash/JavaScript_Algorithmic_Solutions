console.log(
  new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  })
)
// other
let t = new Date()

let h = t.getHours()
let m = t.getMinutes()
let s = t.getSeconds()

console.log(h, m, s) // prinst current time
