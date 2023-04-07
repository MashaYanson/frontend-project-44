/* eslint-disable no-console */
import readlineSync from 'readline-sync';

import { getRandomInt } from './question2.js';

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

const gcd = (userName) => {
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  while (i <= 3) {
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const number1 = getRandomInt(20);
    const number2 = getRandomInt(20);
    const resultOfGcd = getGcd(number1, number2);
    const answer = readlineSync.question(`Question: ${number1} ${number2}\n`);
    if (String(answer) === String(resultOfGcd)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${resultOfGcd}. Let's try again, ${userName}!`);
      break;
    }
  }
};
export default gcd;
