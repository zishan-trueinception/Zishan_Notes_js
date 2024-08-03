// falsy and truthy values

// false ,0, -0, BigInt 0n, '', null, undefined, NaN

// turthy values
// "0", 'false', " ", [], {},function(){}, true 

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}