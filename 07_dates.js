/****************** DATES *****************/

// Date is an object

let myDate = new Date();

console.log(typeof myDate); // object

// operations perform on date
console.log(myDate.toString()); // Fri Aug 02 2024 15:47:12 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Fri Aug 02 2024 
console.log(myDate.toTimeString()); // 15:47:12 GMT+0530 (India Standard Time)

//  Months start with 0 in js 
let myCreatedDate = new Date(2024,0,2)
console.log(myCreatedDate.toString());
//  o/p => Tue Jan 02 2024 00:00:00 GMT+0530 (India Standard Time)










