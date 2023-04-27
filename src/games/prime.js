import getRandomArbitrary from '../utils/getRandomArbitrary.js';
import isPrime from '../utils/isPrime.js';

const prime = () => {
  const number = Math.round(getRandomArbitrary(20, 2));
  const question = `Question: ${number} \n`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question, answer };
};
export default prime;
