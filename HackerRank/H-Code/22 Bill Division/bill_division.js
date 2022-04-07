function bonAppetit(bill, k, b) {
  //let eat = bill.splice(k,1)              ------
  let sum = (bill.reduce((a, b) => a + b) - bill[k]) / 2

  if (b - sum === 0) console.log('Bon Appetit')
  else console.log(b - sum)
}

//--------------------#2-----------------
function bonAppetit(bill, k, b) {
  //let eat = bill.splice(k,1)
  let sum = (bill.reduce((a, b) => a + b) - bill[k]) / 2

  b - sum === 0 ? console.log('Bon Appetit') : console.log(b - sum)
}
