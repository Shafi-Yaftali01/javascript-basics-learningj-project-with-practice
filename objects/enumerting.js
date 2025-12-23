// Explanation: 
// Enumerating properties of objects in JavaScript allows you to inspect and work with the data inside objects. 
// There are several ways to accomplish this, each with its use case:

// 1. 'for...in' loop: Iterates over all enumerable properties (including inherited ones).
// 2. Object.keys(): Returns an array of the object's OWN enumerable property names.
// 3. Object.entries(): Returns an array of the object's OWN enumerable [key, value] pairs.
// 4. The 'in' operator: Checks if a property exists in the object (including inherited properties).

// Let's see how each works in an example:

const circle = {
  radius: 1,
  draw: () => console.log('draw')
};

// 1. Using 'for...in' to list all enumerable properties and their values:
for (let key in circle) {
  console.log(key, circle[key]);
}
// This lists 'radius' 1 and 'draw' [Function].

// 2. Using Object.keys() to get all own enumerable property names:
for (let key of Object.keys(circle)) {
  console.log(key);
}
// This prints just the keys: 'radius' and 'draw'.

// 3. Using Object.entries() to get [key, value] pairs:
for (let entry of Object.entries(circle)) {
  console.log(entry);
}
// This prints: ['radius', 1] and ['draw', [Function]].

// 4. Using 'in' to check if a property exists:
if ('radius' in circle) {
  console.log('Circle has a radius');
}
// Prints "Circle has a radius" if the property exists.

// You can use these techniques to enumerate and inspect object properties depending on your needs.

