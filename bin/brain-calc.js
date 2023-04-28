#!/usr/bin/env node
import runGame from '../src/runGame.js';
import calc from '../src/games/calc.js';

const description = 'What is the result of the expression?';
runGame(description, calc);
