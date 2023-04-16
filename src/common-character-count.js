function getCommonCharacterCount(s1, s2) {
  let commonCount = 0;
  let s1Array = s1.split('');

  for (let i=0; i < s1Array.length; i++){
    if (s2.includes(s1Array[i])) {
      commonCount++;
      s2 = s2.replace(s1Array[i], '')
    }
  }
  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
