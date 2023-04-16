function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, diskNumber) - 1;
  const seconds = Math.floor(turns * 3600 / turnsSpeed);
  return { turns, seconds };
}

module.exports = {
  calculateHanoi
};
