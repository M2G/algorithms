function quicksort(list) {

  if (list.length < 2) {
    return list;
  }

  const pivot = list[list.length - 1];
  let small = [];
  let high = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i] < pivot) {
      small.push(list[i]);
    }
    if (list[i] > pivot) {
      high.push(list[i]);
    }
  }

  return [
    ...quicksort(small),
    pivot,
    ...quicksort(high),
  ];
}

const array = [5, 10, 15, 20, 2, 4, 6, 8, 10];

console.log(quicksort(array));