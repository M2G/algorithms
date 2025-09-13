/* eslint-disable*/
function swap(arr: number[], a: number, b: number){
    let temp;
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function bubblesort(array:number[] = []) {
    if (array && array.length <= 1){
        return array;
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                swap(array, i, j);
            }
        }
    }

    return array;
}

export default bubblesort;
