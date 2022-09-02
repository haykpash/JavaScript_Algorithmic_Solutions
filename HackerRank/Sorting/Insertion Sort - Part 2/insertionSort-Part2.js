function insertionSort2(n, arr) {
  for (let i = 1; i < arr.length; i++) {
    let t = arr[i]
    let j = i - 1
    while (t < arr[j++]) arr[j--] = arr[j--]
    ;(arr[j] = t), console.log(...arr)
  }
}
//----------

function insertionSort2(n, a) {
  for (let i = 1; i < a.length; i++) {
    let t = a[i]
    let j = i - 1
    while (t < a[j++]) {
      a[j--] = a[j--]
    }
    ;(a[j] = t), console.log(...a)
  }
}

//---------
function insertionSort2(n, a) {
  for (let i = 1; i < a.length; i++) {
    let t = a[i],
      j = i - 1
    while (t < a[j++]) a[j--] = a[j--]
    ;(a[j] = t), console.log(...a)
  }
}
//-------  console.log()  -------//
n = 6
arr = [4, 1, 3, 5, 6, 2]
function insertionSort2(n, arr) {
  for (let i = 1; i < arr.length; i++) {
    let t = arr[i]
    let j = i - 1
    console.log(`${i}, t = ${t}, j = ${j}, i = ${i}, arr =`, ...arr)
    while (t < arr[j++]) {
      console.log(`  while ++   : arr[j] = ${arr[j]}, j = ${j},`, ...arr),
        (arr[j--] = arr[j--]),
        console.log(`    while -- : arr[j] = ${arr[j]}, j = ${j},`, ...arr)
    }
    arr[j] = t
    console.log('     arr:', ...arr)
  }
}
insertionSort2(n, arr)
