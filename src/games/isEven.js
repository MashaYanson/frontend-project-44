import getRandomArbitrary from '../utils/getRandomArbitrary.js';

const isNumberEven = () => {
  const number = getRandomArbitrary(1, 100);
  const question = `Question: ${number} \n`;
  const answer = number % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};
export default isNumberEven;
