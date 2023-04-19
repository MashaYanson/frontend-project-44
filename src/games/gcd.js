/* eslint-disable no-console */

import getRandomInt from '../utils/getRandomInt.js';

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

const gcd = () => {
  const number1 = getRandomInt(20);
  const number2 = getRandomInt(20);
  const answer = getGcd(number1, number2);
  const question = `Question: ${number1} ${number2}\n`;
  return { question, answer };
};
export default gcd;
