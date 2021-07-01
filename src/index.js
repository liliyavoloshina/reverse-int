module.exports = function reverse (n) {
  const stringed = String(n)
  const reversed = stringed.split('').reverse().join('').split('-').join('')
  return +reversed
}
