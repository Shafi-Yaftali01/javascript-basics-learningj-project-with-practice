// let's create an object that represents an address

let address = { // object that represents an address
  street: "123 Main St",
  city: "Anytown",
  state: "CA",
  zip: "12345",
  showAddress: function() {
    return `${this.street}, ${this.city}, ${this.state}, ${this.zip}`;
  }
}; // object that represents an address

function showAddress(address) { // function that shows the address
  return address.showAddress(); // return the address as a string
} // function that shows the address

console.log(showAddress(address)); // print the address


