import { cons } from 'hexlet-pairs';
import startGame, { random } from '../game-core';

const getRandomNumber = () => {
  const min = 1;
  const max = 20;

  return random(min, max);
};

const getTask = () => {
  const min = 1;
  const max = 2;

  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  let task;

  const operationKey = random(min, max);

  switch (operationKey) {
    case 1:
      task = cons(`${firstNumber} + ${secondNumber}`, (firstNumber + secondNumber).toString());
      break;
    case 2:
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
