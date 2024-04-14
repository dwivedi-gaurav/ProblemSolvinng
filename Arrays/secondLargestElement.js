function secondLargestElement(arr) {
  let m1 = arr[0];
  let m2 = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > m1) {
      m2 = m1;
      m1 = arr[i];
    } else if (arr[i] > m2) {
      m2 = arr[i];
    }
  }
  return m2;
}

console.log(secondLargestElement([6, 7, 4, 71, 1, 100]));
