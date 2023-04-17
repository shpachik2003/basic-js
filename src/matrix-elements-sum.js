function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let sum = 0;
  
  for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++) {
      if (matrix[row][col] === 0) {
        break; // Stop counting values below a "0"
      }
      sum += matrix[row][col];
    }
  }
  
  return sum;
}


module.exports = {
  getMatrixElementsSum
};
