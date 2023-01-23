/** Q3: Recursive Digit “Summer”
 * @param {number} num
 * @returns {number}
 */
function sumOfDigits(num, sum = 0) {
  if (num === 0) {
    return sum;
  }
  return sumOfDigits(
    Math.floor(Math.abs(num) / 10),
    sum + (Math.abs(num) % 10)
  );
}
