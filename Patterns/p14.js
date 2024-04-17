/*==============================

A 
A B 
A B C 
A B C D 
A B C D E

===============================*/

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let c = 64;
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${String.fromCharCode(c + j)} `);
    }
    process.stdout.write("\n");
  }
}

pattern(5);
