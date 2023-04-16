function encodeLine(str) {
  let encoded = '';
  let count = 1;

  for (let i=1; i < str.length; i++){
    if (str[i] === str[i-1]);
    count++;
  }
    else {
      encoded += (count > 1 ? count : '') + str[i - 1];
      count = 1;
    }
  
  
  return encoded;
}

module.exports = {
  encodeLine
};
