import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let greaterNumber = 0;
  let lessNumber = 0;
  if (number1 > number2) {
    lessNumber = number2;
    greaterNumber = number1;
  } else {
    lessNumber = number1;
    greaterNumber = number2;
  }
  let divisionRemainder = 1;
  while (divisionRemainder !== 0) {
    divisionRemainder = greaterNumber % lessNumber;
    greaterNumber = lessNumber;
    lessNumber = divisionRemainder;
  }
  return greaterNumber;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const answer = String(getGcd(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, answer];
};

const startGame = () => play(description, generateRound);
export default startGame;
