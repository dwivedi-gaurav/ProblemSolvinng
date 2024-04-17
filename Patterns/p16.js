/*===========================

A 
B B 
C C C 
D D D D 
E E E E E 

=============================*/

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let c = 64;
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${String.fromCharCode(c + i)} `);
    }
    process.stdout.write("\n");
  }
}

pattern(5);
