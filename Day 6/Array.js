// Task 1
const arr1 = [1,2,3,4,5,6,7,8,9,10]

const printArray =function(){
    for(let i=0; i<arr1.length; i++){
        console.log(arr1[i]);
    }
}

printArray()

// Task 2
console.log("First value :",arr1[0], "Last value :",arr1[arr1.length-1]);

// Task 3

arr1.push(2); //Add new number at the end of the array

console.log(arr1);

// Task 4

arr1.pop() // remove the last element of the array
console.log(arr1);

// Task 5
arr1.shift() //remove the first element 
console.log(arr1);

// Task 6
arr1.unshift(1) //Add new element at the first 
console.log(arr1);

// Task 7

const doubleValue = arr1.map((value) => value * 2)

console.log("Double value :",doubleValue);

// Task 8

const newArray = arr1.filter((number)=>{
    return number % 2 ===0
})

console.log("Even element of the array :",newArray);

// Task 9

const sumValue = arr1.reduce((acc,value) => acc + value ,0)

console.log("Sum of array :",sumValue);

// Task 10

for(let i=0; i<arr1.length; i++){
    console.log("Array :",arr1[i]);
}

//Task 11
console.log("Foreach loop");
arr1.forEach((num) => console.log(num))

// Task 12
let gfg = [];
let row = 3;
let col = 3;
let h = 0

// Loop to initialize 2D array elements.
for (let i = 0; i < row; i++) {
    gfg[i] = [];
    for (let j = 0; j < col; j++) {
        gfg[i][j] = h++;
    }
}
console.log(gfg);

// Task 13

console.log(gfg[1][1]);