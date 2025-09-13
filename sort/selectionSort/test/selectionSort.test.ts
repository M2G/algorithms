import selectionSort from '../selectionSort';

describe('selectionSort test', () => {
    it('selectionSort', () => {
        const array = [5, 10, 15, 20, 2, 4, 6, 8, 10];

        expect(selectionSort(array)).toEqual([
            2,  4, 5,  6, 10,
            10, 20, 8, 15
        ]);
    });
});