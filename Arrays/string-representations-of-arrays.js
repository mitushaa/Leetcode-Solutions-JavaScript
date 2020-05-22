var names = ["David", "Cynthia", "Raymond", "Clayton", "Mike", "Jennifer"];
var namestr = names.join();
print(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
namestr = names.toString();
print(namestr); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
//When you call the print() function with an array name, it automatically calls the toString() function for that array:
print(names); // David,Cynthia,Raymond,Clayton,Mike,Jennifer
