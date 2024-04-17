/*==========================

A B C D E 
A B C D 
A B C 
A B 
A 

===========================*/

function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let c = 64;
    for (let j = 1; j <= n - i + 1; j++) {
      process.stdout.write(`${String.fromCharCode(c + j)} `);
    }
    process.stdout.write("\n");
  }
}

pattern(5);
