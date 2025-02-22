import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNumber();
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, answer];
};

const startGame = () => play(description, generateRound);
export default startGame;
