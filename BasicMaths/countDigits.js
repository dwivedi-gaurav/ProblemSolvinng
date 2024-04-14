function countDigitsInbuild(n) {
  if (isNaN(n)) return 0;
  return n.toString().length;
}

function countDigits(n) {
  let count = 0;
  while (n) {
    n = Math.round(n / 10);
    count++;
  }
  return count;
}

function countDigitsLog(n) {
  return Math.round(Math.log10(n)) + 1;
}

console.log(countDigitsInbuild(1234567));
console.log(countDigits(12345));
console.log(countDigitsLog(1234));
