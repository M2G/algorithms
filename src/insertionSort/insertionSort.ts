/* eslint-disable */
/**
 * Javascript implementation of insertionSort
 * Complexity: O(n^2)
 * In Place Sorting: True
 */

function insertionSort(list:number[] = []) {

  if (list && list.length <= 1) {
    return list;
  }

  let i = 0; // index into unsorted section
  let j; // index into sorted section
  let tmp; // the value currently being compared

  for (i; i < list.length; i += 1) {

    // store the current value because it may shift later
    tmp = list[i];
    // tmp: [5,10,4,15,20,2,10,6,22,8]

    // console.log('tmp', tmp)

    j = i - 1;
    // j : [-1,0,1,2,3,4,5,6,7,8]

    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section over
    // by one. This creates space in which to insert the value.
    for (j; j >= 0 && list[j] > tmp; j -= 1) {
     // list[j + 1] :
     // [
     // 4,10,2,20,15,10,5,10,20,
     // 6,20,15,10,8,22,20,15,10
     // ]
      list[j + 1] = list[j];
    }

    console.log('list[j + 1] ', list[j + 1] )

    // list[j + 1]: 5,10,5,15,20,4,15,10,22,10
    // @ts-ignore
    list[j + 1] = tmp;
  }

  return list;

}

export default insertionSort;
