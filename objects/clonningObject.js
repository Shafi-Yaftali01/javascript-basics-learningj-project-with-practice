// Cloning an object

const circle = {
  radius: 1,
  draw: () => console.log('draw')
};

const circle2 = {};

Object.assign(circle2, circle);
console.log(circle2);

const another = {...circle};
console.log(another);
