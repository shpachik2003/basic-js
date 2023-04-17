function sortByHeight(arr) {
  const filteredArr = arr.filter(num => num !== -1);
  const sortedArr = filteredArr.sort((a, b) => a - b);
  let index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== -1) {
        arr[i] = sortedArr[index];
        index++;
      }
    }
  
    return arr;
  
}

module.exports = {
  sortByHeight
};
