#!/usr/bin/env node
import usernameQuestion from '../src/cli.js';
import progression from '../src/progression.js';

console.log('Welcome to the Brain Games!');
const userName = usernameQuestion();
progression(userName);
