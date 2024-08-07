// iterations / loops
    // for

for (let i = 0; i <= 10; i++) {
    const element = i ;
    if (element == 5) {
        console.log("element is 5");
        
    }
    console.log(element);
}

/* 
    output

    0
    1
    2
    3
    4
    element is 5
    5
    6
    7
    8
    9
    10
*/

for (let i = 0; i <= 10; i++) { 
    console.log(`outer loop: ${i}`);
    
    for (let j = 0; j <= 10; j++) {
    console.log(`inner loop: ${j} and outer loop: ${i}`);
}
}

// loop in an array

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(myArray.length);    // 10
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}

// break and continue keywords

for( i = 1; i <= 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}
// o/p 1 2 3 4


for( i = 1; i <= 10; i++){
    if(i == 5){
        continue; // skip one iteration and start next iteration
    }
    console.log(i);
}

// o/p 1 2 3 4 6 7 8 9 10


