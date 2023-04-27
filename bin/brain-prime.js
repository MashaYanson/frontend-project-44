#!/usr/bin/env node

import runGame from '../src/runGame.js';
import prime from '../src/games/prime.js';
import makeQuiz from '../src/utils/makeQuiz.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const quiz = makeQuiz(prime);
runGame(description, quiz);
