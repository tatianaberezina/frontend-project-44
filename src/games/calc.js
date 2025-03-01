import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operatorsArray = ['+', '-', '*'];
  const randomNumberForOperator = getRandomNumber(0, 2);
  return operatorsArray[randomNumberForOperator];
};

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const number2 = getRandomNumber(0, 100);
  const operator = getRandomOperator();
  const answer = String(calculate(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;
  return [question, answer];
};

const startGame = () => play(description, generateRound);
export default startGame;
