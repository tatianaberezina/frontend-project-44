import readlineSync from 'readline-sync';

const play = (rules, getQuestionAndCorrectAnswer) => {
  // приветствие

  console.log('Welcome to the Brain Games!');
  // получаем имя игрока
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  // выводим правило
  console.log(rules);
  // начинаем цикл
  let numberOfCorrectAnswers = 0;
  while (numberOfCorrectAnswers < 3) {
    // получаем вопрос и ответ
    const [question, correctAnswer] = getQuestionAndCorrectAnswer();
    // выводим вопрос
    console.log(`Question: ${question}`);
    // просим игрока ввести ответ
    const userAnswer = readlineSync.question('Your answer: ');
    // сравниваем ответ игрока с правильным
    if (userAnswer === correctAnswer) {
      numberOfCorrectAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    // конец цикла
  }
  // поздравление игрока
  console.log(`Congratulations, ${userName}!`);
};
export default play;
