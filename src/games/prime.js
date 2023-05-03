import getRandomArbitrary from '../utils/getRandomArbitrary.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0 || number === 1) {
      return false;
    }
  }
  return true;
};

const prime = () => {
  const number = Math.round(getRandomArbitrary(20, 2));
  const question = `Question: ${number} \n`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question, answer };
};
export default prime;
