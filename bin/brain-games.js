#!/usr/bin/env node

import usernameQuestion from '../src/cli.js';
import isnumberEven from '../src/question1.js';

console.log('Welcome to the Brain Games!');
const userName = usernameQuestion();
isnumberEven(userName);
