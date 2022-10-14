const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {

  let res = [];
  let result;
  let columns = matrix[0].length;

  for (let row in matrix) {
    res = res.concat(matrix[row])
  }

  for (let i = 0; i < res.length - columns; i++) {
    if (res[i] === 0) {
      res[columns + i] = 0;
    }
  }

  result = res.reduce((prev, cur) => prev + cur, 0);

  return result
}

module.exports = {
  getMatrixElementsSum
};
