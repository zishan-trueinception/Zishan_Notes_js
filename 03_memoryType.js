/********************************** Memory Type ***************************/

/*  stack (Primitive) => copy value change
    Heap(Non-Primitive / Reference) => original value change
*/

// stack memory
let myName = "sk zishan"
let anotherName = myName
anotherName = "zishan"  
                            //  outputs

console.log(myName);           //   sk zishan
console.log(anotherName);      //   zishan

let userOne = {
    name: "zishan_shaikh",
    email: "zishan@trueinception.ai.in",
    upi: "user@ybl"
}

// heap memory
let userTwo = userOne
userTwo.email = "usertwo@gmail.com",
userTwo.name = "userTwo"

console.log(userOne);   //  { name: 'userTwo', email: 'usertwo@gmail.com', upi: 'user@ybl' }

console.log(userTwo);   //  { name: 'userTwo', email: 'usertwo@gmail.com', upi: 'user@ybl' }

console.table([userOne.email]);

/*
┌─────────┬─────────────────────┐
│ (index) │       Values        │
├─────────┼─────────────────────┤
│    0    │ 'usertwo@gmail.com' │
└─────────┴─────────────────────┘
*/