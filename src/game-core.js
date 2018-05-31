import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  return name;
};

const getQuestion = task => car(task);

const getAnswer = task => cdr(task);

export const random = (from, to) => Math.floor(Math.random() * to) + from;

export default (gameDescription, getTask) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameDescription}\n`);

  const userName = askUserName();

  const questionsCount = 3;

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
