//The push() function adds an element to the end of an array:

var nums = [1,2,3,4,5];
print(nums); // 1,2,3,4,5
nums.push(6);
print(nums); // 1,2,3,4,5,6

//Using push() is more intuitive than using the length property to extend an array:
var nums = [1,2,3,4,5];
print(nums); // 1,2,3,4,5
nums[nums.length] = 6;
print(nums); // 1,2,3,4,5,6

//Adding element without using mutator (inefficient)

var nums = [2,3,4,5];
var newnum = 1;
var N = nums.length;
for (var i = N; i >= 0; --i) {
 nums[i] = nums[i-1];
}
nums[0] = newnum;
print(nums); // 1,2,3,4,5

//The mutator function for adding array elements to the beginning of an array is unshift(). Here is how the function works:
var nums = [2,3,4,5];
print(nums); // 2,3,4,5
var newnum = 1;
nums.unshift(newnum);
print(nums); // 1,2,3,4,5
nums = [3,4,5];
//Adding mutliple elements
nums.unshift(newnum,1,2);
print(nums); // 1,2,3,4,5
//The second call to unshift() demonstrates that you can add multiple elements to an array with one call to the function.
