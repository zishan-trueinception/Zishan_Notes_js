/******************** OBJECT*****************/

// object is a collection of key value pair
// key and value are seperated by colon
// key and value are seperated by comma

// symbol decleration

const mySymbol = Symbol();

const myObj = {
    name: "zishan",
    [mySymbol]: "mykey1",
    "full name": "Sk Zishan",
    age: 20,
    email: "zishan@trueinception.ai.in",
}

console.log(myObj); // { name: 'zishan', age: 20, email: 'zishan@trueinception.ai.in' }

// methods of access object 

console.log(myObj.name); // zishan
console.log(myObj["email"]); // zishan@trueinception.ai.in
console.log(myObj["full name"]); // Sk Zishan
console.log(myObj[mySymbol]); // mykey1


