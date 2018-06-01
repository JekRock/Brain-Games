import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const questionsCount = 3;

const getQuestion = task => car(task);

const getAnswer = task => cdr(task);

export default (gameDescription, getTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  for (let i = 0; i < questionsCount; i += 1) {
    const task = getTask();
    const question = getQuestion(task);
    const answer = getAnswer(task);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
