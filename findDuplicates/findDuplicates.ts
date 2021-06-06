// Find the only repetitive element between 1 to n-1
function findDuplicates(array = []): number[] {

	if (!array?.length){
		return [];
	}


  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length, i !== j; j += 1) {
      if (array[i] === array[j]) {
	 result.push(array[i]);
	}
    }
  }

  return result;
};

const array = [4,3,2,7,8,2,3,1];

console.log(findDuplicates(array));