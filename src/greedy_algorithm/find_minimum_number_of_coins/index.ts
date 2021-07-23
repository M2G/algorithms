// eslint-disable-next-line
function computeChange(coins: number[], price: number) {
  let p = price;
  const c = coins;
  const toReturned: number[] = [];

  for (let i = c.length - 1; i >= 0; i -= 1) {
    while (p >= c[i]) {
      p -= c[i];
      toReturned.push(c[i]);
    }
  }

  return toReturned;
}

computeChange([
  1,
  2,
  5,
  10,
  20,
  50,
  100,
  200,
  500
], 93);
