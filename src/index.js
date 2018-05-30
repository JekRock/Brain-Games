import readlineSync from 'readline-sync';

export const askUserName = () => {
  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name}!\n`);

  return name;
};

export const random = (from, to) => Math.floor(Math.random() * to) + from;
