/* eslint-disable */

/**
 * Javascript implementation of minimum coin change problem
 * Complexity: O(V)
 */

function computeChange(coins: number[], price: number) {

  if (!coins.length || !price) return 0;

  const toReturned: number[] = [];
  let counter: number = 0;

  for (let i = coins.length - 1; i >= 0; i -= 1) {
    while (price >= coins[i]) {
      price -= coins[i];
      toReturned[counter] = coins[i];
      counter += 1;
    }
   if (price === 0) break;
  }

  return toReturned;
}


console.log(computeChange([
  1,
  2,
  5,
  10,
  20,
  50,
  100,
  200,
  500
], 93));
