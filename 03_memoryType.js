/*  stack (Primitive) => copy value change
    Heap(Non-Primitive / Reference) => original value change
*/

// stack memory
let myName = "sk zishan"
let anotherName = myName
anotherName = "zishan"

console.log(myName);
console.log(anotherName); 

let userOne = {
    name: "zishan_shaikh",
    email: "zishan@trueinception.ai.in",
    upi: "user@ybl"
}

// heap memory
let userTwo = userOne
userTwo.email = "usertwo@gmail.com",
userTwo.name = "userTwo"

console.log(userOne);
console.log(userTwo);
console.table([userOne.email]);
