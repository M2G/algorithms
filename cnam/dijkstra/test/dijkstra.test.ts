import bubbleSort from '../bubbleSort';

describe('bubbleSort test', () => {
    it('bubbleSort', () => {
        const array = [5, 10, 15, 20, 2, 4, 6, 8, 10];
        expect(bubbleSort(array)).toEqual([ 2, 4, 5, 6, 8, 10, 10, 15, 20]);
    });
});