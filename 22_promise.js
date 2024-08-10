/*
A Promise in JavaScript is an object that represents the eventual 
completion (or failure) of an asynchronous operation and 
its resulting value. 
It allows you to write asynchronous code in a more synchronous fashion and 
handle the success or failure of asynchronous operations.

States of a Promise:
Pending: The initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
*/

const promiseOne = new Promise(function(resolve, reject) {
    // Do any async task
    // DB calls, API calls, newtwork calls
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('Promise consumed');
})

// Note: not necessary to store promise in a variable
promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log('Async task completed 2');
        resolve()
    },1000)
})
promiseTwo.then(function(){
    console.log('Promise consumed 2');
})