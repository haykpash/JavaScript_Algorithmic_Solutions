function plusMinus(arr) {
  //positive[0], Negative[1], zero[2]
  let number = [0, 0, 0]
  arr.map((e) => {
    if (e > 0) number[0]++
    else if (e < 0) number[1]++
    else if (e == 0) number[2]++
  })

  let ratio = number
    .map((e) => {
      return (e / arr.length).toFixed(6)
    })
    .join('\n')

  console.log(ratio)
}
