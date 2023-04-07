/* eslint-disable no-console */
import readlineSync from 'readline-sync';

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}
const isnumberEven = (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let i = 0;
  while (i <= 3) {
    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
    const number = getRandomInt(100);
    const answerIsEven = readlineSync.question(`Question: ${number} \n`);
    if (answerIsEven === 'yes' && number % 2 === 0) {
      console.log('Correct!');
      i += 1;
    } else if (answerIsEven === 'no' && number % 2 > 0) {
      console.log('Correct!');
      i += 1;
    } else {
      const oppositAnswer = answerIsEven === 'yes' ? 'no' : 'yes';
      console.log(`${answerIsEven} is wrong answer ;(. Correct answer was ${oppositAnswer}. Let's try again, ${userName}`);
      break;
    }
  }
};
export default isnumberEven;
