import { cons } from 'hexlet-pairs';
import startGame from '../game-core';
import random from '../utils';

const min = 1;
const max = 100;
const progressionLength = 10;

const getProgression = (length) => {
  const startNumber = random(min, max);

  const progression = new Array(length);

  for (let i = 0, shift = 0; i < length; i += 1, shift += 2) {
    progression[i] = String(startNumber + shift);
  }

  return progression;
};

const getTask = () => {
  const progression = getProgression(progressionLength);
  const replaceIndex = random(0, progression.length - 1);
  const answer = progression[replaceIndex];

  progression[replaceIndex] = '..';

  const question = progression.join(' ');

  return cons(question, answer);
};

export default () => {
  startGame('What number is missing in this progression?', getTask);
};
