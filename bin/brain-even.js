#!/usr/bin/env node
import isNumberEven from '../src/games/isEven.js';
import runGame from '../src/runGame.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
runGame(description, isNumberEven);
