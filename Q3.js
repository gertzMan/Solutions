/** Q3: Recursive Digit “Summer”
 * @param {number} num
 * @returns {number}
 */
function sumOfDigits(num) {
  if (num < 10) {
    return num;
  }

  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}
