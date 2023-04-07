#!/usr/bin/env node
import usernameQuestion from '../src/cli.js';
import calc from '../src/question2.js';

console.log('Welcome to the Brain Games!');
const userName = usernameQuestion();
calc(userName);
