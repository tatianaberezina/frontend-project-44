export const rules = 'What is the result of the expression?';

const maxNumberInGame = 100;
const getRandomNumber = () => {
  const randomNumber = Math.round(Math.random() * maxNumberInGame);
  return randomNumber;
};

const getRandomOperator = () => {
  const operatorsArray = ['+', '-', '*'];
  const randomNumberForOperator = Math.round(Math.random() * (operatorsArray.length - 1));
  return operatorsArray[randomNumberForOperator];
};

const getCorrectAnswer = (number1, number2, operator) => {
  if (operator === '+') {
    return number1 + number2;
  }
  if (operator === '-') {
    return number1 - number2;
  }
  return number1 * number2;
};

export const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getRandomOperator();
  const correctAnswer = String(getCorrectAnswer(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;
  return [question, correctAnswer];
};
