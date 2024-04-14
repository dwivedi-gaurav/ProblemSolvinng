/*
======================

1
12
123
1234
12345

======================
*/

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j}`);
    }
    process.stdout.write("\n");
  }
}

pattern(5);
