import insertionSort from '../insertionSort';

describe('insertionSort test', () => {
    it('insertionSort', () => {
        const array = [5, 10, 15, 20, 2, 4, 6, 8, 10];
        expect(insertionSort(array)).toEqual([ 2, 4, 5, 6, 8, 10, 10, 15, 20]);
    });
});