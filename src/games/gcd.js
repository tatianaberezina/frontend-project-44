export const rules = 'Find the greatest common divisor of given numbers.';

const maxNumberInGame = 100;
const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * maxNumberInGame);
  return randomNumber;
};

const getCorrectAnswer = (number1, number2) => {
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

export const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const correctAnswer = String(getCorrectAnswer(number1, number2));
  const question = `${number1} ${number2}`;
  return [question, correctAnswer];
};
