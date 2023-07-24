import { sleep } from "./sleep";

export const getRandomFruit = () => {
  const randomNumber = Math.random();

  sleep(300);

  if (randomNumber < 0.25) return "🥥";
  if (randomNumber < 0.5) return "🍌";
  if (randomNumber < 0.75) return "🍉";
  else return "🍏";
};
