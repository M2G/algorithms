/*

Nums = [1,5,9]
Target = 10

Map = { 1:0 5:1 }
i = 2
value = 9
complement pair = 10 = 9 - 1
[0,2]
map[1]

*/


function twoSum(nums: number[], target: number): number[] {
      const hash = new Map();
     for (let i = 0; i < nums.length; i += 1) {
        const complement = target - nums[i];
       
        if (hash.has(complement)){
          return [hash.get(complement), i]
        }
 
        hash.set(nums[i], i);   
     };
     
     return null;
};