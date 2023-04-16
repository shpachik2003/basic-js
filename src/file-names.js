function renameFiles(names) {
  let countMap = {};
  let result = [];

  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (countMap[name] === undefined) {
      countMap[name] = 1;
      result.push(name);
    } else {
      
      let newName = `${name}(${countMap[name]})`;
      
      while (countMap[newName] !== undefined) {
        countMap[name]++; // increment suffix until unique name is found
        newName = `${name}(${countMap[name]})`;
      }
      
      countMap[newName] = 1;
      result.push(newName);
    }
  }
  
  return result;
}

module.exports = {
  renameFiles
};
