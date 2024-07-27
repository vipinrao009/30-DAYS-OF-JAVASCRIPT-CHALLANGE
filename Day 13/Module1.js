// Task 1: Create a module that exports a function to add two numbers. Import and use this module in another script. 
function add1(a,b){
    return a+b
}


// Task 2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script..

const person = {
    name:'vipin',
    age: 18,

    greet(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
    },

    celebrateBirthday(){
        this.age +=1
        console.log(`Happy birthday ! I am now ${this.age}`)
    }

}

//Task 3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

function add2(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Division by zero is not allowed.');
    }
    return a / b;
  }

  // Task 4: Create a module that exports a single function using default export. Import and use this function in another script,

function abc(name) {
    return `Hello, ${name}! Welcome to the application.`;
  }



  
  //Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties

// Constants
const PI = 3.14159;
const E = 2.71828;
const GRAVITY = 9.81; // m/s^2

// Functions
function calculateCircumference(radius) {
    return 2 * PI * radius;
}

function calculateArea(radius) {
    return PI * radius * radius;
}

function calculateForce(mass, acceleration = GRAVITY) {
    return mass * acceleration;
}

// Exporting constants and functions
  // Named exports
  module.exports = {
    add1,
    person,
    add2,
    subtract,
    multiply,
    divide,
    abc,// explicitly set the default export

    PI,
    E,
    GRAVITY,
    calculateCircumference,
    calculateArea,
    calculateForce
  };

  // Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.

  // Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.