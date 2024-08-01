/*
    string concatination
*/

// we declare String in js "hello" as well as 'hello'

const name = "zishan "
const repoCount = 5
console.log(name + repoCount + " String Concatination");

// new type to concatinate the string in js
// with the use of back stick ${``}
console.log(`hello my name is ${name} and my repoCount is ${repoCount}`);

// variable declaration one more type is 
const gameName = new String(`truelink`)

// String methods 
console.log(gameName.toUpperCase()); 
console.log(gameName.length);

// when we want to check the position of the character 
console.log(gameName.indexOf('n')); 

// when we want to check the index of the character 
console.log(gameName.charAt(2));

// use "trim" to remove unused space

const newString = "     truelink     "
console.log(newString);     //normal print
console.log(newString.trim());  // print with trim function

// replace item from string

const url = "https://zishantrueinception.com/true%20link"
console.log(url);
console.log(url.replace('%20','_'));

// when we want to find the item is available in String or not
console.log(url.includes('zishan'));
