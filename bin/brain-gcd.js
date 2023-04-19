#!/usr/bin/env node
import runGame from '../src/utils/runGame.js';
import gcd from '../src/games/gcd.js';

const description = 'Find the greatest common divisor of given numbers.';
runGame(description, gcd);
