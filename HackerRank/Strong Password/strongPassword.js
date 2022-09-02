function minimumNumber(n, password) {
  let a = 0
  if (!/[a-z]/.test(password)) a++, n++
  if (!/[A-Z]/.test(password)) a++, n++
  if (!/[0-9]/.test(password)) a++, n++
  if (!/[!@#$%^&*()+-]/.test(password)) a++, n++
  if (n < 6) a += 6 - n
  return a
}
//-----------------------------------
function minimumNumber(n, password) {
  let a = 0
  const arr = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+]/].filter((r) =>
    !r.test(password) ? (a++, n++) : null
  ).length
  return n < 6 ? (a += 6 - n) : a
}
//--------------------------------------------
function minimumNumber(n, password) {
  const c = [/[0-9]/, /[a-z]/, /[A-Z]/, /[!@#$%^&*()\-+]/].filter(
    (r) => !r.test(password)
  ).length
  return Math.max(c, 6 - n)
}
