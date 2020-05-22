
/*One of the most commonly used accessor functions is indexOf(), which looks to see if
the argument passed to the function is found in the array. If the argument is contained
in the array, the function returns the index position of the argument. If the argument is
not found in the array, the function returns -1. Here is an example:*/

var names = ["David", "Cynthia", "Raymond", "Clayton", "Jennifer"];
//PUTSTR - write a string to an output unit.
putstr("Enter a name to search for: ");
var name = readline();
var position = names.indexOf(name);
if (position >= 0) {
 print("Found " + name + " at position " + position);
}
else {
 print(name + " not found in array.");
}
//
