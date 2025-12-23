// Constructor function is a function that creates an object and returns it using the this keyword

function Circle(radius) { // function that creates an object and returns it
  this.radius = radius; // property of the object (the radius is passed as an argument to the function)
  this.draw = () => console.log('draw'); // method of the object (a function that is a property of the object) which is defined in the object (it's a function that is a property of the object)
} // the function is called with the new keyword, which creates a new object and assigns it to the this keyword

const circle = new Circle(1); // call the function to create an object and assign it to a variable
circle.draw(); // call the method on the object to draw the circle (it's a function that is a property of the object) which is defined in the object

const circle2 = new Circle(2); // call the function to create an object and assign it to a variable
circle2.draw(); // call the method on the object to draw the circle (it's a function that is a property of the object) which is defined in the object