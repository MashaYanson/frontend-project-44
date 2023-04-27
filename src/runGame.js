/*
ВОПРОС Почему мы следуем логике "имя файла = имя по дефолту модуля" и ты
просишь меня файл с RunGame назвать Index
В каких случаях этот паттерн именования нарушается?
Пишу здесь в комментариях, потому что в чате в MatterMost ты мне так и не ответил.
по поводу RunGame:
мое решение мне кажется удобнее
т.к. иначе в каждой игре придется формировать повторяющийся массив,
а в вынесенной абстракции makeQuiz формируется только один раз
Считаю это решение удобнее потому что изменением одной константы можно менять
количество раундов во всех играх.
сейчас я вынесла запуск makeQuiz выше в файлы игр но
теперь она вызывается в 5 разных местах в не в одном скажи чем это лучше чем предыдущее решение
*/

import readlineSync from 'readline-sync';
import usernameQuestion from './cli.js';

const runGame = (description, quiz) => {
  console.log('Welcome to the Brain Games!');
  const userName = usernameQuestion();
  console.log(description);
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
