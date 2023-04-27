#!/usr/bin/env node
import runGame from '../src/runGame.js';
import progression from '../src/games/progression.js';
import makeQuiz from '../src/utils/makeQuiz.js';

const description = 'What number is missing in the progression?';
const quiz = makeQuiz(progression);
runGame(description, quiz);
