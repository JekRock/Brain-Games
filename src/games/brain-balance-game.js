import { cons } from 'hexlet-pairs';
import startGame from '../game-core';
import random from '../utils';

const min = 100;
const max = 1000;

const balanceNumber = (inputNumber) => {
  const sortedNumbers = String(inputNumber).split('').sort().map(Number);
  const len = sortedNumbers.length - 1;

  const iter = (input) => {
    const numbers = input;
    const diff = numbers[len] - numbers[0];

    if (diff <= 1) {
      return numbers.join('');
    }
    numbers[0] += 1;
    numbers[len] -= 1;
    return iter(numbers.sort());
  };
  return iter(sortedNumbers);
};

const getTask = () => {
  const question = random(min, max);
  const answer = (balanceNumber(question)).toString();

  return cons(question, answer);
};

export default () => {
  startGame('Balance the given number.', getTask);
};
