#!/usr/bin/env node
import play from '../src/index.js';
import { rules, getQuestionAndCorrectAnswer } from '../src/games/gcd.js';

play(rules, getQuestionAndCorrectAnswer);
