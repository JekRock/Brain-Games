import { cons } from 'hexlet-pairs';
import startGame from '../game-core';
import random from '../utils';

const min = 1;
const max = 100;

const isEven = number => number % 2 === 0;

const getTask = () => {
  const question = random(min, max);
  const answer = isEven(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  startGame('Answer "yes" if number even otherwise answer "no"', getTask);
};
