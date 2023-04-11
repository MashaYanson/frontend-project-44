/* eslint-disable no-console */
import getRandomInt from './utils/getRandomInt.js';

const isNumberEven = () => {
  const number = getRandomInt(100);
  const question = `Question: ${number} \n`;
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};
export default isNumberEven;
