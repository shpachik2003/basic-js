function minesweeper(matrix) {
  let sum = 0;
  for (let j = 0; j < matrix[0].length; j++){
        sum += matrix[0][j]} 
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
        if (matrix[i-1][j] != 0){
      sum += matrix[i][j];
        }
    }
  }
  return sum;
}



module.exports = {
  minesweeper
};
