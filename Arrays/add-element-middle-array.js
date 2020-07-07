/*To add elements to an array using splice(), you have to provide the following argu‐
ments:
• The starting index (where you want to begin adding elements)
• The number of elements to remove (0 when you are adding elements)
• The elements you want to add to the array
Let’s look at a simple example. The following program adds elements to the middle of
an array:*/


var nums = [1,2,3,7,8,9];
var newElements = [4,5,6];
nums.splice(3,0,newElements);
print(nums); // 1,2,3,4,5,6,7,8,9
