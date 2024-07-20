const user = {
    name : "Vipin",
    "fulName" : "Vipin Rao",
    email: "vipin@google.com",
    age:18,
    location:"Azamgarh"
}

console.log(user["age"])
console.log(user.age)
console.log(user.fulName)


//Manipulate the value 

user.location = "Agra"
console.log(user)

// Freeze the object

Object.freeze(user)
user.location = "Jiyanpur"

// Nested object
const regularUser = {
    email:"vipinrao@google.com",
    fullName:{
        userFullName:{
            firstName:"Vipin",
            lastName:"Kumar"
        }
    }
}

console.log(regularUser.fullName.userFullName)

// Combining the object more than one into one object

const obj1 = {1:"a",2:"b",3:"c"}
const obj2 = {4:"a",5:"b",6:"c"}

const obj3 = {...obj1,...obj2}
const obj4 = Object.assign({},obj1,obj2)

// console.log("First method :",obj3);
// console.log("Second method :",obj4)

const tinderUser = {
    name:"Vipin",
    id:'123abc',
    age:"20"
}

console.log(tinderUser);
console.log(Object.keys(tinderUser)) // return all the key of object in the form of array
console.log(Object.values(tinderUser)) //return al the value of the object in the form of array
console.log(Object.entries(tinderUser)) //Seprate all the key and value an individual array

// If we have to check the existing the property in the object then we use this method 

console.log(tinderUser.hasOwnProperty('name'))

//This keyword

const users = {
    username:"vipin",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username} , Welcome to the website`) 
    }
}

users.welcomeMessage()
users.username="Diyar"
users.welcomeMessage()

function chai(){
    console.log(this)
}

chai()

/*

Note ==>
    Object
        i) there are two way to log the objetc
        ii)Why second method is important ?? Bcz 
        iii) u can freeze the object value so that no one can change the value

    This keyword =>
        i) it is refer to the context value

        ii) when u try to log in brower ?? ==> browser ke ander jb vo engine run karta h to sbse jyda globle window h that's why we get not empty object
        iii) when u try to log in vdCode ?? ==> pahale js ko execute karane ka ek tarika tha browser engine me execute karane ka ab engineero ne engine nikala aur alag alag name diya dyno ,node ,bin to abhi hmare pass engine standalone h why we get empty object

        iv) we can't use this keyword in the function

*/