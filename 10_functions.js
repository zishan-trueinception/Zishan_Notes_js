// function declaration
function myFunction() {
    console.log("hello world");
}

// myFunction =>  reference of function
// myFunction() =>  call of function

myFunction()    // o/p hello world

// two numbers addition by function

/*
function name (parameters) {
    // body of the function
}
*/

function substraction(number1, number2) {
    const result = number1 - number2
    console.log(result);
}
substraction(20,10) // o/p 10



function addition(number1, number2) {
    console.log(number1 + number2);
    
}
addition(10, 20)    // o/p 30


function loginUserMessage(username) {
    return `Welcome ${username} just logged in`
    
}
console.log(loginUserMessage("zishan"));    // o/p Welcome zishan just logged in

// rest 
function calculateCardPrice(...num1){
    return num1
    
}
console.log(calculateCardPrice(100,200,500,1000,2500)); // o/p [ 100, 200, 500, 1000, 2500 ]

