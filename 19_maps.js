// The map objects holds a key-value pair
// The key is always a string
// The value can be any data type

  const map = new Map()
  map.set('IN', 'India')
  map.set('US', 'United States')
  map.set('UK', 'United Kingdom')
  console.log(map);
 

  /* 
  output
  Map(3) {
  'IN' => 'India',
  'US' => 'United States',
  'UK' => 'United Kingdom'
}
  */
  
for (const [key,values] of map) {
    console.log(`key is ${key} and value is ${values}`);
    
}

// Note: use for in for object iteration

const myCoding = [
    {
        languageName: "Python",
        languageFiledName: "Py",
    },
    {
        languageName: "javaScript",
        languageFiledName: "JS",
    },
    {
        languageName: "Android",
        languageFiledName: "compose",
    },
    {
        languageName: "HTML",
        languageFiledName: "HTML",
    }
]
// for each can not return a value so we use .filter 
// call back method
myCoding.forEach((element) => {
    console.log(element.languageName, element.languageFiledName);
})

// filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
const newNums = myNums.filter((num) => num >=  5)
console.log(newNums); // [5, 6, 7, 8, 9, 10 ]

// array of objects
const Books = [
    { title: 'Science1', genre: 'Science', publish:1998, edition: 2010},
    { title: 'Maths1', genre: 'Maths', publish:2000, edition: 2023},
    { title: 'Science2', genre: 'Science', publish:1998, edition: 2010},
    { title: 'History', genre: 'History', publish:1998, edition: 2000},
    { title: 'Maths2', genre: 'Maths', publish:2000, edition: 2023},
    { title: 'Stat vol1', genre: 'Stat', publish:2001, edition: 2024},
    { title: 'Stat vol2', genre: 'Stat', publish:2001, edition: 2024},
    { title: 'Stat vol3', genre: 'Stat', publish:2001, edition: 2024},
];

let userBooks = Books.filter( (bk) => bk.edition === 2024)
console.log(userBooks);
/* 
output
[
  { title: 'Book six', genre: 'Stat', publish: 2001, edition: 2024 },
  { title: 'Book seven', genre: 'Stat', publish: 2001, edition: 2024 },
  { title: 'Book eight', genre: 'Stat', publish: 2001, edition: 2024 }
]
*/

userBooks = Books.filter( (bk) => {return bk.publish >= 2000})
console.log(userBooks);
/*
[
  { title: 'Maths1', genre: 'Maths', publish: 2000, edition: 2023 },
  { title: 'Maths2', genre: 'Maths', publish: 2000, edition: 2023 },
  { title: 'Stat vol1', genre: 'Stat', publish: 2001, edition: 2024 },
  { title: 'Stat vol2', genre: 'Stat', publish: 2001, edition: 2024 },
  { title: 'Stat vol3', genre: 'Stat', publish: 2001, edition: 2024 }
]
*/


// .reduce
const shoppingCart = [
    {
        itemName: "shoes",
        price: 999
    },
    {
        itemName: "shirt",
        price: 1999
    },
    {
        itemName: "pants",
        price: 3959
    },
    {
        itemName: "purse",
        price: 599
    },
]
const totalprice = shoppingCart.reduce((acc, item) => acc+item.price, 0)
console.log(`price to pay:- ${totalprice}`);




