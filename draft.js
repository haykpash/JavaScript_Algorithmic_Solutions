arr
  .map((e, i, ar) => ar.map((ee, ii, arar) => console.log(e, ee)).length)
  .reduce((x, y) => Math.max(x, y))
console.log(x, y)

function pickingNumbers(a) {
  return a.map((e, i) => a.filter((ee, ii) => e - ee == 0 || e - ee == 1))
}

function pickingNumbers(a) {
  let maxCount = 0
  for (let num of a) {
    let count = a.filter((item) => item == num || item == num + 1).length

    if (count > maxCount) {
      maxCount = count
    }
  }
  return maxCount
}

function pickingNumbers(a) {
  return Math.max(
    ...a.map((e) => a.filter((ee) => ee - e == 0 || ee - e == 1).length)
  )
}

function pickingNumbers(a) {
  return Math.max(...a.map((e) => a.filter((r) => r == e || r == e + 1).length))
}

let letters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r,s,t,u,v,w,x,y,z',
]

let h = [
  1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
]

function designerPdfViewer(h, word) {
  let letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ]
  let highest = 0
  for (let i = 0; i < word.length; i++) {
    let highNumber = h[letters.indexOf(word[i])]
    if (highest < highNumber) {
      highest = highNumber
    }
  }
  return highest * word.length
}

function utopianTree(n) {
  let cyc = 'spring'
  let height = 1
  for (let i = 0; i < n; i++) {
    if (cyc == 'spring') {
      cyc = 'summer'
      height = height * 2
    } else {
      cyc = 'spring'
      height = height + 1
    }
  }
  return height
}

function utopianTree(n) {
  let height =
    n == 0 ? 1 : n % 2 == 0 ? utopianTree(n - 1) + 1 : utopianTree(n - 1) * 2
  return height
}

function utopianTree(n) {
  let height = 1
  for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      height++
    } else {
      height *= 2
    }
  }
  return height
}

function angryProfessor(k, a) {
  let arrivals = 0
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) arrivals++
  }
  return arrivals >= k ? 'NO' : 'YES'
}

function beautifulDays(i, j, k) {
  let beautifulDay = 0
  for (let s = i; s <= j; s++) {
    let rev = Number(String(s).split('').reverse().join(''))
    if (((s - rev) / k) % 1 === 0) {
      beautifulDay++
    }
  }
  return beautifulDay
}
