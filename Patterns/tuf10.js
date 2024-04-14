/*===============================

*
**
***
****
*****
****
***
**
*

=================================*/

function pattern(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    const c = i <= n ? i : 2 * n - i;
    for (let j = 1; j <= c; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

pattern(5);
