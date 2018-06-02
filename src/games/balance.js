import { cons } from 'hexlet-pairs';
import startGame from '../game-core';
import random from '../utils';

const min = 100;
const max = 1000;

const balanceNumber = (inputNumber) => {
  const sortedNumbers = String(inputNumber).split('').sort().map(Number);
  const len = sortedNumbers.length - 1;

  let diff = sortedNumbers[len] - sortedNumbers[0];
  while (diff > 1) {
    sortedNumbers[0] += 1;
    sortedNumbers[len] -= 1;
    sortedNumbers.sort();
    diff = sortedNumbers[len] - sortedNumbers[0];
  }
  return sortedNumbers.join('');
};

const getTask = () => {
  const question = random(min, max);
  const answer = (balanceNumber(question)).toString();

  return cons(question, answer);
};

export default () => {
  startGame('Balance the given number.', getTask);
};
