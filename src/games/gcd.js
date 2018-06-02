import { cons } from 'hexlet-pairs';
import startGame from '../game-core';
import random from '../utils';

const minNumber = 1;
const maxNumber = 100;

const getGcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;

  while (a !== 0 && b !== 0) {
    if (a > b) {
      a %= b;
    } else {
      b %= a;
    }
  }
  return a + b;
};

const getTask = () => {
  const firstNumber = random(minNumber, maxNumber);
  const secondNumber = random(minNumber, maxNumber);

  const question = `${firstNumber} ${secondNumber}`;
  const answer = (getGcd(firstNumber, secondNumber)).toString();

  return cons(question, answer);
};

export default () => {
  startGame('Find the greatest common divisor of given numbers.', getTask);
};
