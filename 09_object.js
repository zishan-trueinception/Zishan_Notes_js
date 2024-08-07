/******************** OBJECT*****************/

/* a prototype is a mechanism by which objects can 
inherit properties and methods from other objects.
*/ 

// object is a collection of key value pair
// key and value are seperated by colon
// key and value are seperated by comma

// symbol decleration

// singleton Object 
    const tinderUser = new Object()     // {}

// non singleton Object
    const tinderTwo = {}

const mySymbol = Symbol();

// object literals
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

// object nesting

const user = {
    name: "zishan",
    fullname: {
        userfullname:{
            firstname: "zishan",
            lastname: "shaikh"
        }
    }
}
console.log(user.name,user.fullname.userfullname.lastname);

// Object.assign() => used to merge two or more objects or static method copies all enumerable own properties

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {3: "d", 4: "e", 5: "f"}
const obj4 = {6: "g", 7: "h", 8: "i"}
console.log(Object.assign( {},obj1, obj2));
s
const obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

// access key of an object
console.log(Object.keys(obj3));

// access values of an object
console.log(Object.values(obj3));

// to find key or value is present in object or not
console.log(obj1.hasOwnProperty('a'));



