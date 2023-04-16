function getDNSStats(domains) {
  const result = {};
  domains.forEach((domain) => {
    const parts = domain.split('.').reverse();
    let current = '';

    parts.forEach((part) => {
      current += `.${part}`;

      if (result[current]) {
        result[current]++;
      } else {
        result[current] = 1;
      }
    });
  });

  return result;
}

module.exports = {
  getDNSStats
};
