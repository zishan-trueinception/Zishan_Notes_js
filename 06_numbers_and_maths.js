/* ************************* Numbers & Maths ************************* */
const balance = new Number(100)
console.log(balance)    // 100
console.log(balance.toString().length)   // 3
console.log(balance.toFixed(1))   // 100.0

const number = 123.4528
console.log(number.toPrecision(4))   // 123.5


// convert into stndard value 
const hundreds = 400000
console.log(hundreds.toLocaleString('en-IN'));  // 4,000,000

console.log(Math);      // Object [Math] {}

// .abs() stands for absolute value
console.log(Math.abs(-2));   // 2

// .round() => round the number
console.log(Math.round(2.5));  // 3

//  .ceil() => round up top value
console.log(Math.ceil(2.3));   // 3

//  floor() => round down the value
console.log(Math.floor(2.9));  // 2

//  .sqrt() => use to find square root of a number
const math = 25
console.log(Math.sqrt(math));

//  to find lowest value in array
const arr = [1,2,3,4,5,6,7,8,9,10]
console.log(Math.min(...arr));     // 1

// to find highest value in array
console.log(Math.max(5,4,7,8,9,32));    // 32

// Math.random gives value between 0 to 1
console.log(Math.random());

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);