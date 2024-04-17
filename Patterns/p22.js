function pattern(n) {
  let m = [];
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      if (i === 0 || j === 0 || i === 2 * n - 2 || j === 2 * n - 2) {
        if (m[i]) {
          m[i][j] = n;
        } else {
          m[i] = [n];
        }
      } else {
        const up = m[i - 1][j];
        const left = m[i][j - 1];
        const value = up > left ? up - 1 : left - 1;
        m[i][j] = value;
      }
    }
  }

  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      process.stdout.write(`${m[i][j]}`);
    }
    process.stdout.write("\n");
  }
}
pattern(3);
