function increment(number) {
  let ret = 1;

  for (let i = number.length - 1; i >= 0; i--) {
    if (number[i] + 1 === 10) {
      number[i] = 0;
      ret = 1;
    } else {
      number[i]++;
      ret = 0;
      break;
    }
  }

  if (ret) number.unshift(ret);

  return number;
}

console.log(increment([9, 9]));

// Time complexity: O(n)
// Space complexity : 0(1)
