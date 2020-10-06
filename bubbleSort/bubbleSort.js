function bubblesort(array = []) {
    if (array && array.length <= 1){
        return array;
    }

    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }

    return array;
}

const array = [5, 10, 15, 20, 2, 4, 6, 8, 10];

console.log(bubblesort(array));