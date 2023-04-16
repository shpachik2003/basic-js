function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  
  const initials = members
    .filter(member => typeof member === 'string')
    .map(name => name.trim()[0].toUpperCase());
  
  return initials.sort().join('');
}


module.exports = {
  createDreamTeam
};
