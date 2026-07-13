// Day 1 – Modern JavaScript Fundamentals
// Learn
// var vs let vs const
 var greeter = "hey hi";

    function newFunction() {
        var hello = "hello";
    };
// greeter is global scope but hello is function scope.
// var can be re-declared and updated.
 var greeter = "hey hi";
    var times = 4;

    if (times > 3) {
        var greeter = "say Hello instead"; 
    }

    // console.log(greeter) // "say Hello instead"

// let
let greeting = "say Hi";
    if (true) {
        let greeting = "say Hello instead";
        // console.log(greeting); // "say Hello instead"
    }
    // console.log(greeting); // "say Hi"

// let is block scoped - block is chunk of code bounded by {}
// let can be updated but not re-declared.
let newGreeting = "say Hi";
newGreeting = "say Hello instead";

// const
// const are block scoped
// const cannot be updated or re-declared
// const objects cannot be updated but properties of this objects can be updated.

// Primitive vs reference types
// Primitive Types
// String, Number, Boolean, Null, Undefined, Symbol, BigInt
// copy by value
let score1 = 100;
let score2 = score1;
score2 = 50;
console.log(score1);

// Reference Types
// Object, Array, Function, Date
// copy by reference
let user1 = {
    name: 'Alex'
};

let user2 = user1;

user2.name = 'Sam'

console.log(user1.name);

// Strings
// Numbers
// Booleans
// Template literals
// Type coercion
// Truthy & falsy values
// Equality (== vs ===)