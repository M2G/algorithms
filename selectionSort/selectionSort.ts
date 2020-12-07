function selectionSort(array) {

  if (array.length < 1) {
    return array;
  }

  for (let i = 0; i < array.length; i += 1) {

    let minIndex = i;

    console.log('minIdx : ', minIndex);

    for (let j = i + i; j < array.length; j += 1) {

      console.log('J : ', j);

      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    let temp = [];
    temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;

  }

  return array;

}

export default selectionSort;