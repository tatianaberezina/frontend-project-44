#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = askName();

const maxNumberInGame = 100;

const playIsEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const getRandomNumber = () => {
    const rundomNumber = Math.round(Math.random() * maxNumberInGame);
    return rundomNumber;
  };

  const isEven = () => {
    let numberOfCorrectAnswers = 0;
    while (numberOfCorrectAnswers < 3) {
      const randomNumber = getRandomNumber();
      const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
      console.log(`Question: ${randomNumber}`);
      const userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === correctAnswer) {
        numberOfCorrectAnswers += 1;
        console.log('Correct!');
      } else {
        console.log(
          `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
        );
        console.log(`Let's try again, ${userName}!`);
        return;
      }
    }
    console.log(`Congratulations, ${userName}!`);
  };
  isEven();
};

playIsEven();
export default playIsEven;
