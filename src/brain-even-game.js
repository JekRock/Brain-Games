import readlineSync from 'readline-sync';
import { askUserName, random } from './index';

const isEven = number => number % 2 === 0;

export default () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = askUserName();

  const randomFrom = 1;
  const randomTo = 100;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = random(randomFrom, randomTo);
    console.log(`Question: ${randomNumber}`);

    const userInput = readlineSync.question('Your answer: ');

    if ((isEven(randomNumber) && userInput === 'yes') || (!isEven(randomNumber) && userInput === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`'${userInput}' is wrong answer ;(. Correct answer was '${isEven(randomNumber) ? 'yes' : 'no'}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
