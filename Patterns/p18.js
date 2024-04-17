/*==========================================

E
DE
CDE
BCDE
ABCDE

=========================================*/

function pattern(n) {
  const maxChar = 64 + n;
  for (let i = 1; i <= n; i++) {
    let start = maxChar - i + 1;
    for (j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(start++));
    }
    process.stdout.write("\n");
  }
}

pattern(5);
