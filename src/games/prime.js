export const rules =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const maxNumberInGame = 100;
const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * maxNumberInGame);
  return randomNumber;
};

const arrayOfPrimeNumbersUnderOneHundred = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
  73, 79, 83, 89, 97,
];

export const getQuestionAndCorrectAnswer = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer =
    arrayOfPrimeNumbersUnderOneHundred.includes(randomNumber) === true
      ? 'yes'
      : 'no';
  const question = `${randomNumber}`;
  return [question, correctAnswer];
};
