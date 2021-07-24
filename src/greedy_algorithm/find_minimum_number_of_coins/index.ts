/* eslint-disable */

/**
 * Javascript implementation of minimum coin change problem
 * Complexity: O(V)
 */

function computeChange(coins: number[], price: number) {
  const toReturned: number[] = [];

  for (let i = coins.length - 1; i >= 0; i -= 1) {
    while (price >= coins[i]) {
      price -= coins[i];
      toReturned.push(coins[i]);
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
