#!/usr/bin/env node
import usernameQuestion from '../src/cli.js';
import prime from '../src/prime.js';

console.log('Welcome to the Brain Games!');
const userName = usernameQuestion();
prime(userName);
