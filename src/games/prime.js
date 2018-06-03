import { cons } from 'hexlet-pairs';
import startGame from '../game-core';
import random from '../utils';

const min = -10;
const max = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getTask = () => {
  const question = random(min, max);
  const answer = isPrime(question) ? 'yes' : 'no';

  return cons(question, answer);
};

export default () => {
  startGame('Is this number prime?', getTask);
};
