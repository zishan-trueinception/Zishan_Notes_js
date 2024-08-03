/*
    - arrow functions (also known as "fat arrow functions") 
    - provide a shorter syntax for writing function expressions.
    - They are introduced in ES6 (ECMAScript 2015) and have some unique characteristics compared to regular function expressions.

*/

const chai = () => {
    console.log("hello world");
}
chai()

// Implicit return
const chai1 = () => console.log("hello world");
chai1()

const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2 )
console.log(addTwo(10, 20))

// when we want to return the object
const addTwo1 = (num1, num2) => ({ num1, num2 })
console.log(addTwo1(10, 20))