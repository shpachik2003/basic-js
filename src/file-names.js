function renameFiles(names) {
  const counts = {};
  return names.map(name => {
    if (counts[name]) {
      const newName = `${name}(${counts[name]})`;
      counts[newName] = (counts[newName] || 0) + 1;
      return newName;
    }
    counts[name] = (counts[name] || 0) + 1;
    return name;
  });
}

module.exports = {
  renameFiles
};
