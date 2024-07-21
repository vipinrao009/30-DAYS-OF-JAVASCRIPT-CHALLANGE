// Task 1

let name  = "Vipin Kumar";
let age = 20;

console.log(`Hello my name is ${name} and I am ${age} old`);

// Task 2

const multiLineString = `
This is a multi-line string.
You can write text on multiple lines
without using concatenation or escape characters.
Template literals make it easy to include variables, too!

For example, here's a variable:
const name = 'ChatGPT';
And here's how you can include it in the string:
Hello, ${name}!
`;

console.log(multiLineString);

// Task 3

const number = [10, 20, 30, 40, 50]

const [first, second] = number

console.log(first)
console.log(second)

// Task 4

const book = {
    title:"The art of being alone",
    author:"Unkown"
}

const {title,author} = book

console.log(title)
console.log(author)

// Task 5
const arr = [1,2,3,4,5,6]

const newArr = [...arr,7,8,9]

console.log(newArr)

// Task 6
 function sum(...numbers){
    return numbers.reduce((acc,value)=> acc+value,0)
 }

const result = sum(1,2,3,4);
const result1 = sum(10,20,30,40)
console.log(result)
console.log(result1)

// Task 7

function product(a,b=1){
    return a*b;
}

console.log(product(2))

// Task 8
const name1 = "JavaScript"
const version = 'ES6'

const programmingLanguage = {
    name1,
    version,
    getDescription(){
        return `${this.name} is a powerful programming language intoduced in ${this.version}`
    },
    details:{
        paradism:'Multiparadism',
        designedBy: 'Brendan Eiach'
    }, 
    logDetails() {
        console.log(`Language: ${this.name}`);
        console.log(`Version: ${this.version}`);
        console.log(`Description: ${this.getDescription()}`);
        console.log(`Paradigm: ${this.details.paradigm}`);
        console.log(`Designed By: ${this.details.designedBy}`);
    }
}

console.log(programmingLanguage);
programmingLanguage.logDetails();

// Task 9
const propName1 = 'firstName';
const propName2 = 'lastName';
const propName3 = 'age';

const user = {
  [propName1]: 'John',
  [propName2]: 'Doe',
  [propName3]: 30,
  [`full${propName1}${propName2}`]: 'John Doe',
  getDetails() {
    return `${this[propName1]} ${this[propName2]} is ${this[propName3]} years old.`;
  }
};

console.log(user);
console.log(user.getDetails());
