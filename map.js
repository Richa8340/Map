// Create a new Map
const myMap = new Map();

// 1. Add key-value pairs to the Map
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');
myMap.set('occupation', 'Engineer');

console.log('Map after adding key-value pairs:');
console.log(myMap);

// 2. Check if a specific key exists
const keyToCheck = 'age';
const exists = myMap.has(keyToCheck);
console.log(`Does the key '${keyToCheck}' exist? ${exists}`);

// 3. Retrieve the value associated with a given key
const keyToRetrieve = 'city';
const value = myMap.get(keyToRetrieve);
console.log(`The value associated with the key '${keyToRetrieve}' is: ${value}`);

// 4. Iterate through all key-value pairs
console.log('Iterating through all key-value pairs:');
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
