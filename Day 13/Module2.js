const {add1} = require('./Module1.js')
const {add2,subtract, multiply, divide} = require('./Module1.js')
const {abc} = require('./Module1.js');
const mathUtils = require('./Module1');
// Task 1
const sum = add1(2,2)
console.log(sum)

// Task 2

const {person} = require('./Module1.js')

person.greet();
person.celebrateBirthday();

// Task 3
console.log(add2(8,8))
console.log(multiply(8,8))
console.log(subtract(16,22))
console.log(divide(16,8))


// Task 4
console.log(abc('Alice')); 

// Task 5
// Import the entire module as an object


// Accessing constants
console.log(`PI: ${mathUtils.PI}`);           // Output: PI: 3.14159
console.log(`E: ${mathUtils.E}`);             // Output: E: 2.71828
console.log(`Gravity: ${mathUtils.GRAVITY}`); // Output: Gravity: 9.81

// Using functions
const radius = 5;
console.log(`Circumference of circle: ${mathUtils.calculateCircumference(radius)}`); // Output: Circumference of circle: 31.4159
console.log(`Area of circle: ${mathUtils.calculateArea(radius)}`);                   // Output: Area of circle: 78.53975

const mass = 10; // kg
console.log(`Force on a mass of ${mass} kg: ${mathUtils.calculateForce(mass)}`);     // Output: Force on a mass of 10 kg: 98.1

// Task 6

// Import lodash using a different alias
const lodash = require('lodash');

// Example array
const array = [1, 2, 3, 4, 5];

// Shuffle the array
const shuffledArray = lodash.shuffle(array);

// Print the shuffled array
console.log('Original Array:', array);
console.log('Shuffled Array:', shuffledArray);

// Task 7

const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/posts/1';

axios.get(url)
.then(response =>{
    console.log(`Response Data :`,response.data)
})
.catch(Error =>{
    console.log(`Error :`,Error)
})

