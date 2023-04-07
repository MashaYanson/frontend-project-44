/* eslint-disable no-console */
import readlineSync from 'readline-sync';

export function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
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

const calc = (userName) => {
  console.log('What is the result of the expression?');
  let i = 0;
  const operations = ['+', '-', '*'];
  while (i <= 3) {
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const number1 = getRandomInt(20);
    const number2 = getRandomInt(20);
    const operationNumber = getRandomInt(2);
    const resultOfCalculation = calculate(number1, number2, operations[operationNumber]);
    const answerCalc = readlineSync.question(`Question:${number1} ${operations[operationNumber]} ${number2} \n`);
    if (String(answerCalc) === String(resultOfCalculation)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answerCalc} is wrong answer ;(. Correct answer was ${resultOfCalculation}. Let's try again, ${userName}!`);
      break;
    }
  }
};
export default calc;
