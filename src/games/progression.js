import getRandomArbitrary from '../utils/getRandomArbitrary.js';

const getProgression = () => {
  const startNumber = getRandomArbitrary(1, 10);
  const stepNumber = getRandomArbitrary(1, 5);
  const arrayLength = getRandomArbitrary(9, 5);
  const emptyIndex = getRandomArbitrary(1, arrayLength - 1);
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

const progression = () => {
  const { answer, arr } = getProgression();
  const question = `Question: ${arr.join(' ')}\n`;
  return { question, answer };
};
export default progression;
