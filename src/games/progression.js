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
  const number1 = getRandomNumber();
  const maxStepInArithmeticProgression = 9;
  const stepInArithmeticProgression = 1 + getRandomNumber(maxStepInArithmeticProgression);
  const arithmeticProgressionArray = getArithmeticProgression(number1, stepInArithmeticProgression);

  const emptyElementIndex = getRandomNumber(maxStepInArithmeticProgression);
  const answer = String(arithmeticProgressionArray[emptyElementIndex]);
  arithmeticProgressionArray[emptyElementIndex] = '..';
  const question = arithmeticProgressionArray.join(' ');
  return [question, answer];
};

const startGame = () => play(description, generateRound);
export default startGame;
