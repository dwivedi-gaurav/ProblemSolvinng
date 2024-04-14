/*==================================

1
01
101
0101
10101

====================================*/

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      const n = (i + j) % 2 === 0 ? 1 : 0;
      process.stdout.write(`${n}`);
    }
    process.stdout.write("\n");
  }
}

pattern(5);
