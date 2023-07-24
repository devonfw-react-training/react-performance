export const sleep = (time: number) => {
  const wakeUpTime = Date.now() + time;

  while (Date.now() !== wakeUpTime) {}
};
