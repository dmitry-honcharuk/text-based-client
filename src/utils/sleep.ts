export const sleep = (time: number = 1000): Promise<void> =>
  new Promise((res) => {
    setTimeout(res, time);
  });
