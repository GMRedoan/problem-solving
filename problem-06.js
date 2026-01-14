function sumNumber(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}

console.log(sumNumber([1, 2, 3, 6])); 