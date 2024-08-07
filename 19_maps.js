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

myCoding.forEach((element) => {
    console.log(element.languageName, element.languageFiledName);
})

