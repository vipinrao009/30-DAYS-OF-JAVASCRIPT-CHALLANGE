// Task 1

const num = 20;

if(num<0){
    console.log("Negative");
}else{
    console.log("Positive");
}

// Task 2

const person = 12;

if(person>=18){
    console.log("Person is eligible for vote");
}else{
    console.log("Person is not eligible for vote");
}

// Task 3

function findLargestNum(a,b,c){
    let largest;

    if(a>=b){
        if(a>=c){
            largest = a;
        }else{
            largest = c;
        }
    }else{
        if(b>=c){
            largest = b;
        }else{
            largest = c;
        }
    }
    return largest;
}

function findLargestNum1(a,b,c,d){
    let largest;

    if(a>=b){
        if(a>=c){
            if(a>=d){
                largest = a;
            }else{
                largest = d;
            }
        }else{
            if(c>=d){
                largest = c;
            }else{
                largest = d;
            }
        }
    }else{
        if(b>=c){
            if(b>=d){
                largest = b;
            }else{
                largest = d;
            }
        }else{
            if(c>=d){
                largest = c;
            }else{
                largest = d;
            }
        }
    }

    return largest
}

let a = 1;
let b = 2;
let c = 3;
let d = 4;

//let largest = findLargestNum(a,b,c)
let largest1 = findLargestNum1(a,b,c,d)

console.log(largest1);


// Task 4

switch (new Date().getDay()) {
    case 0:
        day = "Sunday"
        console.log(day);
        break;
    case 1:
        day = "Monday"
        console.log(day);
        break;
    case 2:
        day = "Tuesday"
        console.log(day);
        break;
    case 3:
        day = "Wednessday"
        console.log(day);
        break;
    case 4:
        day = "Thursday"
        console.log(day);
        break;
    case 5:
        day = "Friday";
        console.log(day);
        break;
    case 6:
        day = "Saturday";
        console.log(day);
    default:
        day = "Looking forward to the Weekend";
        console.log(day);
        break;
}

// TAsk 5

const score = 200

switch(score){
    case 600:
        Grade = "A";
        console.log(Grade);
        break;
    case 500:
        Grade = "B";
        console.log(Grade);
        break;
    case 400:
        Grade = "C";
        console.log(Grade);
        break;
    case 300:
        Grade = "D";
        console.log(Grade);
        break;
    case 100:
        Grade = "F"
        console.log(Grade);
        break
    default :
       Grade = "Plzz enter valid number"
       break
}

// Task 5
const num1 = 21;
const number = (num1%2 ==0) ? console.log("Even") : console.log("Odd");


// Task 7

const year = 2025;

function leapYear(){
    if(year%4 == 0 && year%100 != 0){
        console.log("This year is a leap year");
    }else if(year%400 == 0){
        console.log("This year is a leap year!!!");
    }
    else{
        console.log("This year is not a leap year");
    }
}

leapYear(year)
