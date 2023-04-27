import getRandomArbitrary from '../utils/getRandomArbitrary';
import calculate from '../utils/calculate';

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
