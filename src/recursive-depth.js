class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    // Если массив пустой, то его глубина равна 1
    if (arr.length === 0) {
      return depth;
    }

    // Если массив содержит подмассивы, рекурсивно вычисляем их глубину и добавляем 1
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const subDepth = this.calculateDepth(arr[i]) + 1;
        if (subDepth > depth) {
          depth = subDepth;
        }
      }
    }

    return depth;
  }
}

module.exports = {
  DepthCalculator
};
