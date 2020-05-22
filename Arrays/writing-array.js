//Data is assigned to array elements using the [] operator in an assignment statement.For example, the following loop assigns the values 1 through 100 to an array:

var nums[];
for(var i = 0; i<100; ++i) {
  nums[i]= i+1;
}

//Array elements are also accessed using the [] operator. For example:

var nums[1,2,3,4,5];
var sum = numbers[0] + numbers[1]+ numbers[2]+ numbers[3]+ numbers[4];
//1+2+3+4+5=15
print(sum)


//Efficint way of doing

var numbers = [1,2,3,5,8,13,21];
var sum = 0;
for (var i = 0; i < numbers.length; ++i) {
 sum += numbers[i];
}
print(sum); // displays 53
