/**************** Comparision Operators ****************/

console.log(2 > 5);       // false
console.log(2 < 5);       // true
console.log(3 >= 5);      // false
console.log(5 == 5);      // true
console.log(10 <= 5);     // false
console.log(10 >= 10);    // true
console.log(null > 0);    // false
console.log(null == 0);   // false

// for general knowledge
console.log(false == 0);  // true
console.log(false == ''); // true
console.log(0 == '');     // true
console.log(false == null); // false
console.log(null == false ); // false

/* 
    comparisions convert null to a number
    treat it as 0
 */
console.log(null >= 0);  //true


/*
    when we compare undefined to check equality to any number 
    its always give ans false 
*/
console.log(undefined == 0);    //false
console.log(undefined > 1);     //false
console.log(undefined < 0);     //false
console.log(undefined <= 0);    //false

/*
    " === " use to strict check with data type
*/

    console.log("2" === 2); // missMatch data type false