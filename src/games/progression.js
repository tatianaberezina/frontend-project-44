import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'What number is missing in the progression?';

const getArithmeticProgression = (startNumber, step, elementsCount = 10) => {
  let currentNumber = startNumber;
  const arithmeticProgressionArray = [currentNumber];
  for (let i = 0; i < (elementsCount - 1); i += 1) {
    arithmeticProgressionArray.push(currentNumber += step);
  }

  return arithmeticProgressionArray;
};

const generateRound = () => {
  const number1 = getRandomNumber(0, 100);
  const stepInArithmeticProgression = getRandomNumber(1, 10);
  const arithmeticProgressionArray = getArithmeticProgression(number1, stepInArithmeticProgression);

  const emptyElementIndex = getRandomNumber(0, 9);
  const answer = String(arithmeticProgressionArray[emptyElementIndex]);
  arithmeticProgressionArray[emptyElementIndex] = '..';
  const question = arithmeticProgressionArray.join(' ');
  return [question, answer];
};

const startGame = () => play(description, generateRound);
export default startGame;
