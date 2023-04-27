#!/usr/bin/env node
import runGame from '../src/runGame.js';
import gcd from '../src/games/gcd.js';
import makeQuiz from '../src/utils/makeQuiz.js';

const description = 'Find the greatest common divisor of given numbers.';
const quiz = makeQuiz(gcd);
runGame(description, quiz);
