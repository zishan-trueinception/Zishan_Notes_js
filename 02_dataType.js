/* Primitive data type

    call by value 
    its not provide reference actuall value 
    provide copy of the value

    7 Types: String, Number, Boolean, null, undefined, Symbol,BigInt
    (Symbol => unique)

    

    Reference / Non-Primitive(its provide actuall value or reference)
    Array, Objects, Function

*/ 
// Arrays
const heros = ["shaktiman", "nagraj", "doga"];
console.log(heros);  // o/p   [ 'shaktiman', 'nagraj', 'doga' ]

let myObj = // which key value type written in {...}
{
    name:"Zishan",
    age : 20
}

console.log(myObj); // o/p  { name: 'Zishan', age: 20 }

// Function
const myFunction = function(){
    console.log("Hello world");
}

console.log(myFunction());      // o/p  Hello world



