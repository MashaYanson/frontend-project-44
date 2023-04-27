#!/usr/bin/env node
import isNumberEven from '../src/games/isEven.js';
import runGame from '../src/runGame.js';
import makeQuiz from '../src/utils/makeQuiz.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const quiz = makeQuiz(isNumberEven);
runGame(description, quiz);
