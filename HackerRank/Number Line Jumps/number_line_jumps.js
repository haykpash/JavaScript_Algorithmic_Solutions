function kangaroo(x1, v1, x2, v2) {
  // --------------------------#1-------------------------------------
  if (x1 < x2 && v1 < v2) return 'NO'
  else {
    if (v1 != v2 && (x2 - x1) % (v1 - v2) == 0)
      // O(1)
      return 'YES'
    else return 'NO'
  }

  // ---------------------------#2------------------------------------
  // if (v1 <= v2)      // You don't need (x1 < x2) since it is already a constraint
  //     return "NO"
  // else {
  //     if (((x2 - x1) % (v1 - v2)) == 0)                  // O(1)
  //         return "YES"
  //     else
  //         return "NO"
  // }

  //-----------------------------#3-----------------------------------
  // let meet = 'NO';
  // for(let i = 1; i <= 10000; i++) {
  //     if( ( v1 * i ) + x1 === ( v2 * i ) + x2) {        // O(n)
  //         meet = 'YES';
  //         break;
  //     };
  // }
  // return meet;

  //------------------------------#4----------------------------------
  // let meet = 'NO';
  // for(let i = 1; i <= 10000; i++) {
  //     if( ( v1 * i ) + x1 === ( v2 * i ) + x2) {        // O(n)
  //         return 'YES';
  //     };
  // }
  // return meet;
}
