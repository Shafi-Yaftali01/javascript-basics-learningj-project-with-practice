// Garbage collection is the process of freeing up memory that is no longer being used by the program.
// It is done automatically by the JavaScript engine.
// The JavaScript engine has a garbage collector that frees up memory that is no longer being used by the program.
// The garbage collector is a program that frees up memory that is no longer being used by the program.

let a = new Object(); // create a new object
a.id = 1;
a.name = "John";
a.age = 30;

let b = a; // assign the object a to the variable b (it's the same object as a) so b is a reference to a and a is a reference to the object
console.log(a); // print the object a
console.log(b); // print the object b (John)
b.name = "Jane"; // change the name of the object b (it's the same object as a) so a.name will also change because b is a reference to a and a is a reference to the object

b = null; // set the object b to null so it will be garbage collected and a will not be garbage collected because it is still referenced by the variable a

console.log(a); // print the object a
console.log(b); // print the object b (null)
