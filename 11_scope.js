/**************** SCOPE ****************/

/*
    - scope is the region of code where a variable, objects and functions is accessible
    - Types of scopes => block scope, functional scope, global scope

    - global scope declare on top of the code
    - let and const are block scope 
    - var is functional scope


    for (let index = 0; index < array.length; index++) {
    const element = array[index];
    -> block scope
}

*/

/*  Global scope 
    - Variables declared outside any function or block are in the global scope.
    - In browsers, global variables become properties of the window object.

*/

var globalVar = 'I am global';

function globalScopeExample() {
  console.log(globalVar); // Accessible
}

globalScopeExample();
console.log(globalVar); // Accessible


/*
    Functional scope
    - Variables declared within a function are in function scope.
    - These variables are only accessible within the function where they were declared.

*/ 

function functionScopeExample() {
    var localVar = 'I am local';
    console.log(localVar); // Accessible
  }
  
  functionScopeExample();
//   console.log(localVar); // Error: localVar is not defined
  

/*
    Block scope
    - Variables declared with let or const inside a block 
    - (e.g., {}, if statements, loops) are in block scope.
    - These variables are only accessible within the block where they were declared.

*/

if (true) {
    let blockVar = 'I am block-scoped';
    console.log(blockVar); // Accessible
  }
  
//   console.log(blockVar); // Error: blockVar is not defined

  if (true) {
    const UserName = "zishan"
    if (UserName === "zishan") {
        const website = "youtube"
        console.log(UserName + website) // zishanyoutube
    }
    console.log(website);   // Error: website is not defined
    
  }

  function functionexample(num) {
    return num + 2
    
  }
  console.log(functionexample(10)); // 12

  const functionexampletwo = function(num) {
    return num + 2
  } 
  console.log(functionexampletwo(10)); // 12
  
  