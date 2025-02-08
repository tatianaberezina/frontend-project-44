export const rules = 'What is the result of the expression?';

export const getQuestionAndCorrectAnswer = () => {
  const maxNumberInGame = 100;
  const getRandomNumber = () => {
    const rundomNumber = Math.round(Math.random() * maxNumberInGame);
    return rundomNumber;
  };

  const getRandomOperator = () => {
    const rundomNumberForOperator = Math.round(Math.random() * 2);
    const operatorsArray = ['+', '-', '*'];
    return operatorsArray[rundomNumberForOperator];
  };

  const getCorrectAnswer = (number1, number2, operator) => {
    if (operator === '+') {
      return number1 + number2;
    } else if (operator === '-') {
      return number1 - number2;
    } else {
      return number1 * number2;
    }
  };

  const number1 = getRandomNumber();
  const number2 = getRandomNumber();
  const operator = getRandomOperator();
  const correctAnswer = String(getCorrectAnswer(number1, number2, operator));
  const question = `${number1} ${operator} ${number2}`;
  return [question, correctAnswer];
};
