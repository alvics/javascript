// Apply spread operator on an array
const first = [1, 2, 3];
const second = [4, 5, 6];

// combine the two aarays
const combined = [first.concat(second)];

// Spread operator ...
const combined = [...first, ...second];

// clone the array
const clone = [...first];
console.log(first); // [1,2,3]
console.log(clone); // [1,2,3]

// Apply spread operator on an Object
const first = { name: 'Allen' };
const second = { job: 'Developer' };

const combined = {...first, ...second, location: 'Australia' }; // optional added objects (location)
console.log(combined);