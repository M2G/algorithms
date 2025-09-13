

/**
 * Javascript implementation of Quick Sort Algorithm
 * Complexity: O(N log(N))
 */

function quickSort(list?: number[]): number[] {

  if (!list) return [];

  if (list && list.length < 2) return list;
 

  const pivot = list[0]; // pivot point is the first element
  let small = []; // elements < the pivot value
  let high = []; // elements greater >= the pivot value

  for (let i = 1; i < list.length; i += 1) {
      if (list[i] < pivot) {
        small.push(list[i]);
        continue;
      }

      if (list[i] > pivot) {
        high.push(list[i]);
        continue;
      }
   }

   console.log('pivot', pivot) // 4
   console.log('small', small) // [2, 3, 1]
   console.log('high', high) // [8, 6, 9]

  return [
    ...quickSort(small),
    pivot,
    ...quickSort(high),
  ];
}

export default quickSort;

