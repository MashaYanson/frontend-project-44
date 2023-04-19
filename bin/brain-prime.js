#!/usr/bin/env node

import runGame from '../src/utils/runGame.js';
import prime from '../src/games/prime.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runGame(description, prime);
