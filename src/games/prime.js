import getRandomNumber from '../utils.js';
import play from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const arrayOfPrimeNumbersUnderOneHundred = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

const isPrime = (number) => arrayOfPrimeNumbersUnderOneHundred.includes(number);

const generateRound = () => {
  const randomNumber = getRandomNumber();
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);
  return [question, answer];
};

const startGame = () => play(description, generateRound);
export default startGame;
