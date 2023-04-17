function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      let count = 0;

      // Проверяем все 8 соседних ячеек
      for (let r = Math.max(0, i - 1); r <= Math.min(rows - 1, i + 1); r++) {
        for (let c = Math.max(0, j - 1); c <= Math.min(cols - 1, j + 1); c++) {
          if (r !== i || c !== j) {
            count += matrix[r][c] ? 1 : 0;
          }
        }
      }

      result[i][j] = count;
    }
  }

  return result;
}



module.exports = {
  minesweeper
};
