import readlineSync from 'readline-sync';

import { getRandomInt } from './question2.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 || number === 1) {
      return false;
    }
  }
  return true;
};

const prime = (userName) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i <= 3) {
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const number = getRandomInt(20);
    const answer = isPrime(number);
    const userAnswer = readlineSync.question(`Question: ${number}\n`);
    if (userAnswer === 'yes' && answer === true) {
      console.log('Correct!');
      i += 1;
    } else if (userAnswer === 'no' && answer === false) {
      console.log('Correct!');
      i += 1;
    } else {
      const oppositAnswer = userAnswer === 'yes' ? 'no' : 'yes';
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${oppositAnswer}. Let's try again, ${userName}!`);
      break;
    }
  }
};
export default prime;
