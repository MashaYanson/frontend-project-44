import getRandomArbitrary from '../utils/getRandomArbitrary.js';

function calculate(number1, number2, operation) {
  if (operation === '+') {
    return number1 + number2;
  }
  if (operation === '-') {
    return number1 - number2;
  }
  if (operation === '*') {
    return number1 * number2;
  }
  return 0;
}

const calc = () => {
  const operations = ['+', '-', '*'];
  const number1 = getRandomArbitrary(1, 20);
  const number2 = getRandomArbitrary(1, 20);
  const operationNumber = getRandomArbitrary(0, 2);
  const question = `Question: ${number1} ${operations[operationNumber]} ${number2} \n`;
  const answer = calculate(number1, number2, operations[operationNumber]);
  return { question, answer };
};
export default calc;
