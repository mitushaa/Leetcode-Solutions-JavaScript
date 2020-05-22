var nums = [1,2,3,4,5,9];
nums.pop();
print(nums); // 1,2,3,4,5

//inefficient
var nums = [9,1,2,3,4,5];
print(nums);
for (var i = 0; i < nums.length; ++i) {
 nums[i] = nums[i+1];
}
print(nums); // 1,2,3,4,5,


//Using shift() to remove from beginning
var nums = [9,1,2,3,4,5];
nums.shift();
print(nums); // 1,2,3,4,5

//You’ll notice there are no extra elements left at the end of the array. Both pop() and shift() return the values they remove, so you can collect the values in a variable:
var nums = [6,1,2,3,4,5];
var first = nums.shift(); // first gets the value 9
nums.push(first);
print(nums); // 1,2,3,4,5,6
