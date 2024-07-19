// Task 1 
function evenOrOdd(num){
    if(num%2==0){
        console.log("Number is even");
    }else{
        console.log("Number is odd");
    }
}

const num = 21;
evenOrOdd(num)

// TAsk 2
function squareOfNumber(num1){
    console.log(num1*num1);
}

const num1 = 4;
squareOfNumber(num1)

// Task 3
const findMax = function(a,b){
    const max = (a>b) ? a : b;
    console.log("The maximum number is",max);
    return max;
};

findMax(2,4)

// Task 4

const cancatenate = function(str1,str2){
    const result = str1 + str2;
    console.log("After cancatenate",result);
}

cancatenate("Hello","world")

// Task 5

const sum = (c,d)=>{
    const result = c + d;
    console.log(result);
}

sum(10,20)

// Task 6

const checkCharactor = (str,char)=>{
    const result = str.includes(char)
    console.log(result);
}

const str = "vipin";
const char = "p";

checkCharactor(str,char)

// Task 7
function multiply(a,b=1){
    const result = a*b;
    console.log(result);
}

multiply(2) //it  will multiply by default value of b 
multiply(2,4) 

// Task 8

const greet = (name, age=16)=>{
    return `Hellow ${name}! you are ${age} year old.`;
}

console.log(greet("Vipin",18));

// Task 9
// concept of higher order function 

// const radius = [2,4,6,8]
// const calculateArea1 = function(radius){
//     const output = [];
//     for(let i = 0; i<radius.length; i++){
//         output.push(Math.PI*radius[i] * radius[i])
//     }
//     return output
// }

// console.log(calculateArea1(radius));

// const calculateCircumference = function(radius){
//     const output = []

//     for(let i=0; i<radius.length; i++){
//         output.push(2*Math.PI*radius[i])
//     }
//     return output
// }

// console.log(calculateCircumference(radius));

// const calculateDimeter = function(radius){
//     const output = []; 
//     for(let i=0; i<radius.length; i++){
//         output.push(2*radius[i])
//     }
//     return output
// }

// console.log(calculateDimeter(radius));

// Optimizing the code 

const radius = [2,4,6,8]

const area = function(radius){
    return Math.PI * radius * radius;
}

const circumference = function(radius){
    return 2*Math.PI*radius
}

const dimeter = function(radius){
    return 2*radius
}

const calculate = function(radius,logic){
    const output = [];
    for(let i = 0; i<radius.length; i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,dimeter));

// Task 9

// Higher-order function that calls a function `fn` a given number of times `n`
const repeatFunction = function(fn, n) {
    for (let i = 0; i < n; i++) {
        fn(); // Call the function `fn`
    }
}

// Example function to be called
const sayHello = function() {
    console.log("Hello!");
}

// Example usage
repeatFunction(sayHello, 3); // This will call `sayHello` 3 times


// Task 10
 // Higher-order function that composes two functions and applies them to a value
const compose = function(fn1, fn2) {
    return function(value) {
        return fn2(fn1(value));
    }
}

// Example functions to use with compose
const add2 = function(x) {
    return x + 2;
}

const multiply3 = function(x) {
    return x * 3;
}

// Example usage
const composedFunction = compose(add2, multiply3);

console.log(composedFunction(5)); // Outputs: (5 + 2) * 3 = 21
