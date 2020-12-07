function bubblesort(array:number[] = []) {
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

export default bubblesort;