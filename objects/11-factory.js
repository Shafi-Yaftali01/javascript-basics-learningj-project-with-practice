// Factory function

function createCircle(radius) { // function that creates an object and returns it
  return { // return the object (the object is created and returned by the function)
    radius, // property of the object (the radius is passed as an argument to the function)
    draw: () => console.log('draw') // method of the object (a function that is a property of the object) which is defined in the object (it's a function that is a property of the object)
  }; 
}

const circle1 = createCircle(1);
const circle2 = createCircle(2);

circle1.draw();
circle2.draw();