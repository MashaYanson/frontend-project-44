import getRandomArbitrary from '../utils/getRandomArbitrary.js';
import getGcd from '../utils/getGcd.js';

const gcd = () => {
  const number1 = getRandomArbitrary(1, 20);
  const number2 = getRandomArbitrary(1, 20);
  const answer = getGcd(number1, number2);
  const question = `Question: ${number1} ${number2}\n`;
  return { question, answer };
};
export default gcd;
