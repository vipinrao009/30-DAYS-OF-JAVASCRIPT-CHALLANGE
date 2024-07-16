
// Arithematic operator
// Task 1
const a = 41;
const b = 20;

console.log(a+b);

// Task 2
console.log(a-b);

// Task 3
console.log(a*b);

// Task 4
console.log(a/b);

// Task 5
console.log(a%b);

// Assignment Operator
// Task 6
let c = 4; //we can't use const bcz const is not 
c += 10;
console.log(c);

let d = "Hello";
d += "world";
console.log(d);

// Task 7
let e = 7; 
e -= 3;
console.log(e);

// Note => it is used only for number 

// Comparison Operator
// Task 8

const aa = 9;
const bb = 4;
const cc = 10;

if(aa>bb) console.log("aa is greater");
if(aa<cc) console.log("aa is Lesser");

// Task 9
const aaa = 40;
const bbb = 40;
const ccc = 50;

if(aaa>=bbb) console.log("Greater or equal");
if(aaa<ccc) console.log("aaa is Lesser");

// Task 10

let kh = 50;
let vi = "50"

if(kh==vi){
    console.log("True");
}else{
    console.log("False");
}

// Note =>> == check only data, === check both data and datatype

// Task 11 

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const y = 10;
const z = 20;

if(y>0 && y>z){
    console.log("Both conditions are true.");
}else{
    console.log("conditions are false.");
}

// Task 12 

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

if (y < 0 || y < z) {
    console.log("At least one condition is true.");
  }

// Task 13 
const bool = true 
console.log(!bool);

// Task 14

const ternary = (2<4) ? console.log("True") : console.log("false");