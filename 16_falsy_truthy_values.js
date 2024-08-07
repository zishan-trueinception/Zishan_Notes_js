// falsy and truthy values

// false ,0, -0, BigInt 0n, '', null, undefined, NaN

// turthy values
// "0", 'fasslse', " ", [], {},function(){}, true 

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// for safety check we use Nullish Coalescing Operator(??): null undefined or ""

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1) // 5
console.log(val1); // 10

// Terniary Operator

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

 


