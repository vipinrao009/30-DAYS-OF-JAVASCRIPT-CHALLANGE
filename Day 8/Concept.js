/* Rest operator => 
    i) list of item converted into an array
    ii) It should be place at the last otherwise it will throw error

*/
function sum(a,b,...restOP){
    console.log(restOP); // [3,4,5]
}

sum(1,2,3,4,5)

// Spread operator
function fun(...spread){
    console.log(spread);
}

fun(11,22,33,44,55)

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]






/*
  All the features of ES6

  1) let and const 
  2) Arrow function
  3) Templete literals
  4) default parameter
  5) Rest and spread => jo alag alag work karate h different context me
  6) Destructuring
  7) Classes
  8) 




*/ 