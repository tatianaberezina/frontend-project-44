#!/usr/bin/env node
import play from '../src/index.js';
import { rules, getQuestionAndCorrectAnswer } from '../src/games/calc.js';

play(rules, getQuestionAndCorrectAnswer);
