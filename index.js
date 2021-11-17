// String
// Number
// Boolean
// Array
// Object

var shopper = {
    firstName: "Aaron",
    lastName: "Wilson",
    age: 30,
    likes_shopping: false,
    grocerycart: ["bananas", "cereal", "cheese", "milk", "spinach"],
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
 }

console.log(shopper.grocerycart)
console.log(shopper.fullName())
