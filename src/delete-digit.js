function deleteDigit(n) {
  const numStr = n.toString();
  let maxNum = -Infinity;
  
  for (let i = 0; i < numStr.length; i++) {
    const newNum = parseInt(numStr.slice(0, i) + numStr.slice(i+1));
    if (newNum > maxNum) {
      maxNum = newNum;
    }
  }
  
  return maxNum;
}

module.exports = {
  deleteDigit
};
