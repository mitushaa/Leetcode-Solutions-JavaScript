/*Arrays can be created as the result of calling the split() function on a string. This
function breaks up a string at a common delimiter, such as a space for each word, and
creates an array consisting of the individual parts of the string
*/
var sentence= "the quick brown fox jumped over the lazy dog";
var words = sentence.split(" ");
for (var i = 0; i < words.length; ++i) {
 print("word " + i + ": " + words[i]);
}

//First, you can assign one array to another array:
var nums= [];
for(var i =0; i<10; ++i){
  nums[i]= i+1;
}
var samenums = nums;
