const timeInWords = (h, m) => {
  var time = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
  ]

  if (m == '00') {
    return `${time[h]} o' clock`
  }
  if (m == '01') {
    return `${time[m]} minute past  ${time[h]}`
  }
  if (m == '15') {
    return `quarter past ${time[h]}`
  }
  if (m >= '01' && m < '30') {
    return `${time[m]} minutes past ${time[h]}`
  }
  if (m == '30') {
    return `half past ${time[h]}`
  }
  if (m == '45') {
    return `quarter to ${time[h + 1]}`
  }
  if (m > '30' && m < '60') {
    return `${time[60 - m]} minutes to ${time[h + 1]}`
  }
}

console.log(timeInWords(3, 35))
