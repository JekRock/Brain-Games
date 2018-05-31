import readlineSync from 'readline-sync';
import { askUserName, random } from './index';

const isEven = number => number % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = askUserName();

  const min = 1;
  const max = 100;
  const questionsCount = 3;

  for (let i = 0; i < questionsCount; i += 1) {
    const question = random(min, max);
    const answer = isEven(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven(question) ? 'yes' : 'no'}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
