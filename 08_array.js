/****************** Array *****************/

/* JavaScript Arrays are resizable and can contain mix of different data types
    zero based indexing (indexing starts from 0)
*/

// types of array declerations

const numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numberArr[2]);      // 2

const myHeros = ["shaktiman", "nagraj", "doga"] 
console.log(myHeros[1]);        // nagraj

const newNumberArr = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
console.log(newNumberArr[9]); // 9


// .push() use for adding the values in array
numberArr.push(10)
console.log(numberArr);  //  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]


myHeros.push("zishan")
console.log(myHeros);  //  [ 'shaktiman', 'nagraj', 'doga', 'zishan' ]

// .pop use for remove the last element from the array
numberArr.pop(10)
console.log(numberArr);  //  [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


// .join ues for joining the array
const newArr = numberArr.join()
console.log(newArr);  // 0,1,2,3,4,5,6,7,8,9
console.log(typeof newArr);  // string

// slice and splice
console.log("A ", numberArr);

const newNum = numberArr.slice(1, 3)
console.log(newNum);  // [ 1, 2 ]

const myn2 = numberArr.splice(1, 3)
console.log("C ", numberArr);  // C  [0, 4, 5, 6, 7, 8, 9 ]

console.log(myn2);  // [ 1, 2, 3 ]




