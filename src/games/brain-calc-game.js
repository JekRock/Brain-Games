import { cons } from 'hexlet-pairs';
import startGame from '../game-core';
import random from '../utils';

const min = 1;
const max = 3;

const minNumber = 1;
const maxNumber = 20;

const getTask = () => {
  const firstNumber = random(minNumber, maxNumber);
  const secondNumber = random(minNumber, maxNumber);

  let task;

  const operationKey = random(min, max);

  switch (operationKey) {
    case 1:
      task = cons(`${firstNumber} + ${secondNumber}`, (firstNumber + secondNumber).toString());
      break;
    case 2:
      task = cons(`${firstNumber} - ${secondNumber}`, (firstNumber - secondNumber).toString());
      break;
    case 3:
      task = cons(`${firstNumber} * ${secondNumber}`, (firstNumber * secondNumber).toString());
      break;
    default:
      task = cons();
  }
  return task;
};

export default () => {
  startGame('What is the result of the expression?', getTask);
};
