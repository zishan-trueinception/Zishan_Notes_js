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

// data consumption and how value is passed
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "zishan", email: "zishan@exampe.com"})
    },1000)
})
 promiseThree.then(function(data){
     console.log(data);
 })

 // promise chaining .then .catch
const promsieFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "zishan", email: "zishan@exampe.com"})
        }else {
            reject('Error: Something went wrong')
        }
    },1000)
})
promsieFour
.then((data) =>{
    console.log(data);
    return data.username
})
.then(username =>{
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Promise is either resolved or rejected");
})

// async and await 
// uses try catch for error handling

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "zishan", email: "zishan@exampe.com"})
        }else {
            reject('Error: Something went wrong')
        }
    },1000)
})
async function consumePromiseFive() {
    try {
    const response = await promiseFive
    console.log(response);  
    } catch (error) {
      console.log(error);
        
    } 
}
consumePromiseFive()

// fetch api
async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data =  await response.json()
        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}
getAllUsers()
