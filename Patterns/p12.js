/*==============================

1        1
12      21
123    321
1234  4321
1234554321

===============================*/

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n; j++) {
      if (j <= i) {
        process.stdout.write(`${j}`);
      } else if (j >= 2 * n - i + 1) {
        process.stdout.write(`${2 * n - j + 1}`);
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
}

pattern(5);
