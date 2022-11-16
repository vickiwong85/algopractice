var removeDuplicates = function(nums) {
  let count = {};

  for (var i = 0; i < nums.length; i++) {
      if (count[nums[i]] === undefined) {
          count[nums[i]] = 1;
      } else {
          nums.splice(i, 1);
          i--;
      }
  }

  return nums;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));