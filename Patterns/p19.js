/*
N=5

**********
****  ****
***    ***
**      **
*        *
*        *
**      **
***    ***
****  ****
**********

*/

function printStar(n) {
  for (let i = 0; i < n; i++) {
    process.stdout.write("*");
  }
}

function printSpace(n) {
  for (let i = 0; i < n; i++) {
    process.stdout.write(" ");
  }
}

function upperPattern(n) {
  for (let i = 0; i < n; i++) {
    const stars = 2 * n - 2 * i;
    const space = 2 * n - stars;
    printStar(stars / 2);
    printSpace(space);
    printStar(stars / 2);
    process.stdout.write("\n");
  }
}

function lowerPattern(n) {
  for (let i = n - 1; i >= 0; i--) {
    const stars = 2 * n - 2 * i;
    const space = 2 * n - stars;
    printStar(stars / 2);
    printSpace(space);
    printStar(stars / 2);
    process.stdout.write("\n");
  }
}

function pattern(n) {
  upperPattern(n);
  lowerPattern(n);
}

pattern(5);
