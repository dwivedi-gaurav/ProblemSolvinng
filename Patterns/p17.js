function pattern(n) {
  for (let i = 1; i <= n; i++) {
    let c = 64;
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }
    const mid = Math.ceil((2 * i - 1) / 2);
    for (let k = 1; k <= 2 * i - 1; k++) {
      if (k <= mid) {
        c++;
      } else {
        c--;
      }
      process.stdout.write(String.fromCharCode(c));
    }
    process.stdout.write("\n");
  }
}

pattern(5);
