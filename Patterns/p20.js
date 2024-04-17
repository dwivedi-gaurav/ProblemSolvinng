/*======================
n=5

*        *
**      **
***    ***
****  ****
**********
****  ****
***    ***
**      **
*        *

=========================*/

function pattern(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    const stars = i > n ? 2 * n - i : i;
    const spaces = 2 * n - 2 * stars;
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }
    for (let j = 1; j <= spaces; j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= stars; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

pattern(5);
