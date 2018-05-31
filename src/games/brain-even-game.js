import { cons } from 'hexlet-pairs';
import startGame, { random } from '../game-core';

const isEven = number => number % 2 === 0;

const getTask = () => {
  const min = 1;
  const max = 100;

  const question = random(min, max);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  startGame('Answer "yes" if number even otherwise answer "no"', getTask);
};
