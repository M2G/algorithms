function containsDuplicate(nums: number[]): boolean {
    const arraySort = nums.sort();
   for (let i = 0; i < arraySort.length - 1; i += 1) {
      if (arraySort[i] === arraySort[i + 1]) {
        return true;
      }
    }

    return false;

  }


containsDuplicate([1,2,3,1]);
containsDuplicate([1,2,3,4]);
containsDuplicate([1,1,1,3,3,4,3,2,4,2]);