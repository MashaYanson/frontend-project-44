import readlineSync from 'readline-sync';
import usernameQuestion from './cli.js';

const QUIZ_LENGTH = 3;

const runGame = (description, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = usernameQuestion();
  console.log(description);
  for (let i = 0; i < QUIZ_LENGTH; i += 1) {
    const { question, answer } = game();
    const userAnswer = readlineSync.question(question);
    if (userAnswer === String(answer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
