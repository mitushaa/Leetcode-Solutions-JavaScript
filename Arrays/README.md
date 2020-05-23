The array is the most common data structure in computer programming. <br><br>Every pro‐
gramming language includes some form of array. Because arrays are built-in, they are
usually very efficient and are considered good choices for many data storage purposes

### Shallow Copy vs Deep Copy
**Shallow Copy**<br>
A shallow copy means constructing a new collection object and then populating it with references to the child objects found in the original. <br>
The copying process does not recurse and therefore won’t create copies of the child objects themselves.<br> In case of shallow copy, a reference of object is copied in other object. <br>It means that any changes made to a copy of object do reflect in the original object.

**Deep Copy**(Better)<br>
Deep copy is a process in which the copying process occurs recursively. <br>
It means first constructing a new collection object and then recursively populating it with copies of the child objects found in the original. <br>
In case of deep copy, a copy of object is copied in other object. <br>
It means that any changes made to a copy of object do not reflect in the original object.

**Accessor Functions**<br>
JavaScript provides a set of functions you can use to access the elements of an array.<br>
These functions, called accessor functions, return some representation of the target array
as their return values.
Eg: 2Sum

**indexOf()**<br>
If you have multiple occurrences of the same data in an array, the indexOf() function
will always return the position of the first occurrence.

**lastIndex()**<br>
Returns the position of the last occurrence of the argument in the array, or -1
if the argument isn’t found.

**String Representations of Arrays**<br>
There are two functions that return string representations of an array:
**join()** and **toString()**.<br> Both functions return a string containing the elements of the array de‐limited by commas.

**Creating New Arrays from Existing Arrays**<br>
**concat()** function allows you to put together two or more arrays to create a new array<br>
**splice()** function allows you to create a new array from a subset of an existing array

**Mutator Functions**<br>
JavaScript has a set of mutator functions that allow you to modify the contents of an array without referencing the individual elements.

Adding Elements to the Array: <br>
There are two mutator functions for adding elements to an array: push() and unshift(). <br>
**1.push()** function adds an element to the end of an array<br>
**2.unshift()**- adds an element to the beginning



**Removing Elements from an Array**
**pop()**- Removing an element from the end of an array<br>
**shift()**-The mutator function we need to remove an element from the beginning of an array
