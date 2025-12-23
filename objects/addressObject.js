// let's create an object that represents an address

let address = { // object that represents an address
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
};

function showAddress(address) { // function that shows the address
  return `${address.street}, ${address.city}, ${address.state}, ${address.zip}`; // return the address as a string
}

console.log(showAddress(address)); // print the address
