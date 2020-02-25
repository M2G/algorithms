function insertionSort(list) {

  if (list.length < 2) {
    return list;
  }

  let min;

  for (let i = 0; i < list.length; i++) {

    for (let j = i + i; j < list.length; j++) {
      console.log(list[j]);
    }

  }

}

const array = [5, 10, 15, 20, 2, 4, 6, 8, 10];

console.log(insertionSort(array));