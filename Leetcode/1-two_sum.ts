function twoSum(nums: number[], target: number): number[] {
      const hash = new Map();
     for (let i = 0; i < nums.length; i += 1) {
        const complement = target - nums[i];
       
        if (hash.has(complement)){
          return [hash.get(complement), i];
        }
 
        hash.set(nums[i], i);   
     };
     
     return null;
};