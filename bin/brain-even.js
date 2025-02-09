#!/usr/bin/env node
import play from '../src/index.js';
import { rules, getQuestionAndCorrectAnswer } from '../src/games/even.js';

play(rules, getQuestionAndCorrectAnswer);
