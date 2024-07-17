// Task 1
let n;

for(n=1; n<=10; n++){
    console.log(n);
}

// Task 2
let i;

for(i=1; i<=10; i++){
    console.log(5*i);
}

// TAsk 3

let sum = 0;
let j=0;

while(j<= 10){
    sum =sum+j;
    j++
}
 console.log(sum);

// Task 4
let k = 10;

while(k>=1){
    console.log(k);
    k--;
}

// Task 5

let y = 1;

do{
    console.log(y);
    y++
}while(y<=5)

// Task 6

function calculateFactorial(n) {
    let factorial = 1;
    let i = 1;

    do {
        factorial *= i;
        i++;
    } while (i <= n);

    return factorial;
}

// Example usage:
let number = 5;  // Change this to any positive integer to calculate its factorial
let result = calculateFactorial(number);
console.log(`The factorial of ${number} is: ${result}`);


// Task 7

function printPattern(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* ';
        }
        console.log(row.trim());
    }
}

// Example usage:
printPattern(5);

// Task 8

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;  // Skip the rest of the loop when i is 5
    }
    console.log(i);
}

// Task 9

for (let i = 1; i <= 10; i++) {
    if (i === 7) {
        break;  // Skip the rest of the loop when i is 5
    }
    console.log(i);
}

