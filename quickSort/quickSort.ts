/* eslint-disable */

function quicksort(list?: number[]) {

  //@ts-ignore
  if (list.length < 2) {
    return list;
  }
  //@ts-ignore
  const pivot = list[list.length - 1];
  let small = [];
  let high = [];
  //@ts-ignore
  for (let i = 0; i < list.length; i++) {
    //@ts-ignore
    if (list[i] < pivot) {
      //@ts-ignore
      small.push(list[i]);
    }
    //@ts-ignore
    if (list[i] > pivot) {
      //@ts-ignore
      high.push(list[i]);
    }
  }

  return [
    ...quicksort(small),
    pivot,
    ...quicksort(high),
  ];
}

export default quicksort;