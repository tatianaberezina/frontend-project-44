export const rules = 'What number is missing in the progression?';

const getRandomNumber = (maxNumberInGame = 100) => {
  const randomNumber = Math.round(Math.random() * maxNumberInGame);
  return randomNumber;
};

export const getQuestionAndCorrectAnswer = () => {
  const number1 = getRandomNumber();
  const maxStepInArithmeticProgression = 9;
  const stepInArithmeticProgression = 1 + getRandomNumber(maxStepInArithmeticProgression);
  const arithmeticProgressionArray = [number1];
  let i = 0;
  const maxIndexOfProgressionArray = 9;
  while (i < maxIndexOfProgressionArray) {
    const currentArrayElement = arithmeticProgressionArray[i];
    const nextArrayElement = currentArrayElement + stepInArithmeticProgression;
    i += 1;
    arithmeticProgressionArray.push(nextArrayElement);
  }
  const emptyElementIndex = getRandomNumber(maxStepInArithmeticProgression);
  const correctAnswer = String(arithmeticProgressionArray[emptyElementIndex]);
  arithmeticProgressionArray[emptyElementIndex] = '..';
  const question = arithmeticProgressionArray.join(' ');
  return [question, correctAnswer];
};
