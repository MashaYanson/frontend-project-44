import readlineSync from 'readline-sync';
import usernameQuestion from './cli.js';

const ROUND_COUNT = 3;

const makeQuiz = (game) => Array(ROUND_COUNT).fill(null).map(() => game());

const runGame = (description, game) => {
  console.log('Welcome to the Brain Games!');

  const userName = usernameQuestion();
  console.log(description);
  const quiz = makeQuiz(game);
  for (let i = 0; i < quiz.length; i += 1) {
    const round = quiz[i];
    const userAnswer = readlineSync.question(round.question);
    if (String(userAnswer) === String(round.answer)) {
      console.log('Correct!');
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${round.answer}. Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
