/* eslint-disable no-console */
import getRandomInt from '../utils/getRandomInt.js';
// eslint-disable-next-line consistent-return
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
  const number1 = getRandomInt(20);
  const number2 = getRandomInt(20);
  const operationNumber = getRandomInt(2);
  const question = `Question: ${number1} ${operations[operationNumber]} ${number2} \n`;
  const answer = calculate(number1, number2, operations[operationNumber]);
  return { question, answer };
};
export default calc;
