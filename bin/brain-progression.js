#!/usr/bin/env node
import runGame from '../src/utils/runGame.js';
import progression from '../src/games/progression.js';

const description = 'What number is missing in the progression?';

runGame(description, progression);
