function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  
  
  const transformedArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i < arr.length - 1) {
          i++;
        }
        break;
      case '--discard-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          transformedArr.pop();
        }
        break;
      case '--double-next':
        if (i < arr.length - 1) {
          transformedArr.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next' && arr[i - 1] !== undefined) {
          transformedArr.push(arr[i - 1]);
        }
        break;
      default:
        transformedArr.push(arr[i]);
        break;
    }
  }

  return transformedArr;
}



module.exports = {
  transform
};
