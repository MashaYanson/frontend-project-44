#!/usr/bin/env node
import usernameQuestion from '../src/cli.js';
import gcd from '../src/gcd.js';

console.log('Welcome to the Brain Games!');
const userName = usernameQuestion();
gcd(userName);
