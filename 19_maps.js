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

// use for in for object iteration