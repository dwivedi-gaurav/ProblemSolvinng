/*
================================

*********
 *******
  *****
   ***
    *

================================
*/

function pattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(" ");
    }
    for (let k = 0; k < 2 * n - 2 * i - 1; k++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

pattern(5);
