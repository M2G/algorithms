function findDuplicates(nums){
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = 0; j < nums.length, i !== j; j += 1) {
      if (nums[i] === nums[j]) {
	 result.push(nums[i]);
	}
    }
  }

  return result;
};

const array = [4,3,2,7,8,2,3,1];

console.log(findDuplicates(array));