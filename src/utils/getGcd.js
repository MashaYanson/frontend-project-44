const getGcd = (num1, num2) => {
  let count = num1 > num2 ? num2 : num1;
  while (count > 0) {
    if (num1 % count === 0 && num2 % count === 0) {
      return count;
    }
    count -= 1;
  }
  return 1;
};
export default getGcd;
