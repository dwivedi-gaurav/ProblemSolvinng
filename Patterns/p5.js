/*
======================

*****
****
***
**
*

======================
*/

function pattern(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

pattern(5);