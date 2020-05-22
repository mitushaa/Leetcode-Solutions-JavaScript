//Using Deep Copy
function copy(arr1, arr2){
  for (var i = 0; i< arr1.length; ++1){
    arr2[i] = arr1[i];
}
}

//The following code fragment produces the expected result:
var nums = [];
for (var i= 0; i <100; ++i){
  nums[i]= i+1;
}
var samenums = [];
copy(nums, samenums);
nums[0]= 400;
print(samenums[0]);
