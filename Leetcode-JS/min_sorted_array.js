/**
 * @param {number[]} nums
 * @return {number}
 */
 /**
First find the min, reduce iterations
1. Binary Search
2. Set boundaries from both the sides of the array to find the lowerst one
3. start from n =l and R= nums.length-1
4. Math.floor() function returns the largest integer less than or equal to a given number.
 */
 var findMin = function(nums) {
    let left = 0;
    let right =  nums.length-1;
     while ( left < right ){
         let midPoint= Math.floor((left+right)/2);
         if(nums[midPoint] > nums[right]) left= midPoint+1;
         else right = midPoint
     }
     return nums[left]
 };
