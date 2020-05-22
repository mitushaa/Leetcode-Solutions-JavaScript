//concat()** function allows to put together two or more arrays to create a new array

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cis.concat(dmp);
print(itDiv);
itDiv = dmp.concat(cisDept);
print(itDiv);

//The splice() function creates a new array from the contents of an existing array. The arguments to the function are the starting position for taking the splice and the number of elements to take from the existing array.

var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
print(dmpDept); // Raymond,Cynthia,Danny
print(cisDept); // Mike,Clayton,Terrill,Jennifer
