function designerPdfViewer(h, word) {
  let highest = 0
  for (let i = 0; i < word.length; i++) {
    let highNumber = h[word[i].charCodeAt(0) - 97]
    if (highest < highNumber) {
      highest = highNumber
    }
  }
  return highest * word.length
}
//------------------------------------------------
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
