function isMAC48Address(n) {
  const groups = n.split('-');
  if (groups.length !== 6) {
    return false;
  }
  for (let i = 0; i < groups.length; i++) {
    const group = groups[i];
    if (!/^[0-9A-F]{2}$/.test(group)) {
      return false;
    }
  }
  return true;
}
module.exports = {
  isMAC48Address
};
