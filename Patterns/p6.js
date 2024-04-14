/*
==================

12345
1234
123
12
1

==================
*/

function pattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(`${j}`);
    }
    process.stdout.write("\n");
  }
}

pattern(5);
