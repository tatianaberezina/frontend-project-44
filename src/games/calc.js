import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operatorsArray = ['+', '-', '*'];
  const randomNumberForOperator = Math.round(Math.random() * (operatorsArray.length - 1));
  return operatorsArray[randomNumberForOperator];
};

const getCorrectAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const generateRound = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getRandomOperator();
  const answer = String(getCorrectAnswer(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};

const startGame = () => play(description, generateRound);
export default startGame;
