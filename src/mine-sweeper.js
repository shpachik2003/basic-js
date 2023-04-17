function minesweeper(matrix) {

  for (let i = 1; i < matrix.length; i++) {
    let s = 0;
    for (let j = 0; j < matrix[i].length; j++){
      s = s + matrix[i][j];
    }
  }
  return matrix[2][3];
  console.log (matrix[2][3]);
}

minesweeper( [
    [0, 1, 1, 2],
    [0, 5, 0, 0],
    [2, 0, 3, 3]
   
]);


module.exports = {
  minesweeper
};
