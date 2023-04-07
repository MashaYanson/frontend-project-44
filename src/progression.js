import readlineSync from 'readline-sync';

import { getRandomInt } from './question2.js';

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

const getProgression = () => {
  const startNumber = getRandomInt(10);
  const stepNumber = getRandomInt(5);
  const arrayLength = getRandomArbitrary(9, 5);
  const emptyIndex = getRandomInt(arrayLength - 1);
  const arr = [];
  let i = 0;
  while (i < arrayLength) {
    if (i === 0) {
      arr.push(startNumber);
    } else {
      arr.push(arr[i - 1] + stepNumber);
    }
    i += 1;
  }
  const answer = arr[emptyIndex];
  arr[emptyIndex] = '..';
  return { arr, answer };
};

const progression = (userName) => {
  console.log('What number is missing in the progression?');
  let i = 0;
  while (i <= 3) {
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const { answer, arr } = getProgression();
    const userAnswer = readlineSync.question(`Question: ${arr.join(',')}\n`);
    if (String(userAnswer) === String(answer)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!`);
      break;
    }
  }
};
export default progression;
