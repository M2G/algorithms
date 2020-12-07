import quickSort from '../quickSort';

describe('quickSort test', () => {
    it('quickSort', () => {
        const array = [5, 10, 15, 20, 2, 4, 6, 8, 10];
        expect(quickSort(array)).toEqual([
            2,  4,  5,  6,
            8, 10, 15, 20
        ]);
    });
});