/**
 * IMPORTANT: Please refer to the README file at: https://github.com/gertzMan/Solutions
 */

/**
 * Q4: Recursive Numeric “Sequencer”
 * Version: This implementation recursively prompts the user for input and
 * processes one input at a time.
 * (It uses node.js to run and the terminal.)
 * @returns {number[]}
 */

const readline = require("readline");
const { stdin, stdout } = require("process");

const rl = readline.createInterface({ input: stdin, output: stdout });

function maxInSequence(currMax = -Infinity, count) {
  rl.question("Enter a number (0 to exit): ", (input) => {
    input = Number.parseInt(input);
    if (input === 0) {
      rl.close();
      console.log(
        `The largest number you entered was ${currMax} and it appeared ${count} ${
          count > 1 ? "times" : "time"
        }`
      );
      return;
    } else if (input === currMax) {
      return maxInSequence(currMax, count + 1);
    } else if (input > currMax) {
      return maxInSequence(input, 1);
    } else {
      return maxInSequence(currMax, count);
    }
  });
}
maxInSequence();

/**
 * Q4: Recursive Numeric “Sequencer”
 * Version: This implementation assumes I'm given a string with values separated by a space character;
 * @param {string} numStr
 * @returns {number[]}
 */
function maxInSequence(numStr, currMax = -Infinity, count) {
  const currNum = Number.parseInt(numStr.split(" ")[0]);
  const currNumLength = numStr.split(" ")[0].length;
  if (currNum === 0) return [currMax, count];
  if (currNum > currMax) {
    return maxInSequence(numStr.substring(currNumLength + 1), currNum, 1);
  } else if (currNum === currMax) {
    return maxInSequence(
      numStr.substring(currNumLength + 1),
      currMax,
      count + 1
    );
  } else {
    return maxInSequence(numStr.substring(currNumLength + 1), currMax, count);
  }
}

/**
 * Q4: Recursive Numeric “Sequencer”
 * Version: This implementation assumes I'm given an array with values
 * @param {number[]} numStr
 * @returns {number[]}
 */

function maxInSequence(numArr, index = 0, currMax = -Infinity, count) {
  if (numArr[index] === 0) {
    return [currMax, count];
  } else if (numArr[index] > currMax) {
    return maxInSequence(numArr, index + 1, numArr[index], 1);
  } else if (numArr[index] === currMax) {
    return maxInSequence(numArr, index + 1, currMax, count + 1);
  } else {
    return maxInSequence(numArr, index + 1, currMax, count);
  }
}
