/* The map()
function works like the forEach() function, applying a function to each element of an
array. The difference between the two functions is that map() returns a new array with
the results of the function application. Here is an example:  */

function curve(grade) {
return grade += 5;
}
var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
print(newgrades); // 82, 70, 86, 97, 88


//Strings
function first(word) {
return word[0];
}
var words = ["for","your","information"];
var acronym = words.map(first);
print(acronym.join("")); // displays "fyi"
