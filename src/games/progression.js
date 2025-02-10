export const rules = 'What number is missing in the progression?';

const getRandomNumber = (maxNumberInGame = 100) => {
  const randomNumber = Math.round(Math.random() * maxNumberInGame);
  return randomNumber;
};

export const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandomNumber();
  const stepInArithmeticProgression = 1 + getRandomNumber(9);
  const arithmeticProgressionArray = [number1];
  let i = 0;
  while (i < 9) {
    const currentArrayElement = arithmeticProgressionArray[i];
    const nextArrayElement = currentArrayElement + stepInArithmeticProgression;
    i += 1;
    arithmeticProgressionArray.push(nextArrayElement);
  }
  const emptyElementIndex = getRandomNumber(9);
  const correctAnswer = String(arithmeticProgressionArray[emptyElementIndex]);
  arithmeticProgressionArray[emptyElementIndex] = '..';
  const question = arithmeticProgressionArray.join(' ');
  return [question, correctAnswer];
};
