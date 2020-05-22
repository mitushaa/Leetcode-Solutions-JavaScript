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


