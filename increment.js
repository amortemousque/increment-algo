function increment(number) {
  let carry = 1;

  for (let i = number.length - 1; i >= 0; i--) {
    if (number[i] + 1 === 10) {
      number[i] = 0;
      carry = 1;
    } else {
      number[i]++;
      carry = 0;
      break;
    }
  }

  if (carry) number.unshift(carry);

  return number;
}

console.log(increment([9, 9]));

// Time complexity: O(n)
// Space complexity : 0(1)
