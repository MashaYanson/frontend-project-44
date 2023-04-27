#!/usr/bin/env node
import runGame from '../src/runGame.js';
import calc from '../src/games/calc.js';
import makeQuiz from '../src/utils/makeQuiz.js';

const description = 'What is the result of the expression?';
const quiz = makeQuiz(calc);
runGame(description, quiz);
