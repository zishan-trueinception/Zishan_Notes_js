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

// .concat return a new array
    const marvel_heros = ["thor", "IronMan", "Hulk"]
    console.log(marvel_heros);  //  [ 'thor', 'IronMan', 'Hulk' ]   
    
    const dc_heros = ["Superman", "Batman", "Flash"]
    console.log(dc_heros);  //  [ 'Superman', 'Batman', 'Flash' ]
    

   marvel_heros.push(dc_heros)
   console.log(marvel_heros);
   // add array in array
   //   [ 'thor', 'IronMan', 'Hulk', [ 'Superman', 'Batman', 'Flash' ] ]

   const newHeros = marvel_heros.concat(dc_heros) // here is limitations we can not pass one more value
   console.log(newHeros);   // [ 'thor', 'IronMan', 'Hulk', 'Superman', 'Batman', 'Flash' ]

   const all_new_heros = [...marvel_heros, ...dc_heros] // using spread operator
   console.log(all_new_heros);


   // convert values, numbers , string to array
   let score1 = 100
   let score2 = 200
   let score3 = 300
   let score4 = 400
   console.log(Array.of(score1,score2,score3,score4)); // [ 100, 200, 300, 400 ]

   let name = "zishan"
   let city = "nashik"
   let company = "trueinception"
   console.log(Array.of(name,city,company)); // [ 'zishan', 'nashik', 'trueinception' ]
   
   

   
   



