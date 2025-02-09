export const rules =
  'Answer "yes" if the number is even, otherwise answer "no".';

const maxNumberInGame = 100;
const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * maxNumberInGame);
  return randomNumber;
};

export const getQuestionAndCorrectAnswer = () => {
  const randomNumber = getRandomNumber();
  const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  const question = `${randomNumber}`;
  return [question, correctAnswer];
};
