import getRandomnumber from '../utils.js';
import play from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const randomnumber = getRandomnumber(0, 100);
  const answer = isPrime(randomnumber) ? 'yes' : 'no';
  const question = String(randomnumber);
  return [question, answer];
};

const startGame = () => play(description, generateRound);
export default startGame;
