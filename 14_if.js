/* if

if (condition) {
    
}

if (true) {
    // code executed if condition is true
}


if (false) {
    // code not executed if condition is false
}

*/

const temperature = 30
if(temperature < 50){
    console.log("Temperature is less than 50");
    
}else{
    console.log("Temperature is greater than 50");

}

const score = 200

if(score > 100){
    let power = "fly"
    console.log(`User Power ${power}`); // o/p User Power fly
    
}
console.log(`User Power : ${power}`);   // o/p Uncaught ReferenceError: power is not defined

const balance = 700
if(balance < 700){
    console.log("User has less balance");
}else if(balance > 700){
    console.log("User has extra balance");
}else if(balance==700){
    console.log("User has sufficient balance");
}

// in && operator if one condition is false it will return false or else it will return true
const userLogedin = true
const debitCard = true
if(userLogedin && debitCard){
    console.log("User can make payment");
}else{
    console.log("User cannot make payment");
}

// o/p User can make payment

const userLogedIn = true
const userhasDebitCard = false

if(userLogedin && userhasDebitCard){
    console.log("User can make payment");
}else{
    console.log("User cannot make payment");
}

// o/p User cannot make payment

// in || operator if one condition is true it will return true or else it will return false
const loggedinFromGoogle = true
const loggedinFromEmail = true

if(loggedinFromGoogle || loggedinFromEmail){
    console.log("User can use google or email");
}else{
    console.log("User cannot use google or email");
}

// o/p User can use google or email