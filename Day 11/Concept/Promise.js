const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asynce task is completed')
        resolve()
    },2000)
})

promiseOne.then(function(){
    console.log('promise is consumed')
})

console.log("-------------------------------------")

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asynce task is completed 2")
        resolve()
    },3000)
}).then(function(){
    console.log("promise is consumed 2")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'me_vip',email:'vipin@example.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject) {
    let error = false; // Simulate an error condition
    if (!error) {
        resolve({ username: "xyz123", password: "1111" });
    } else {
        reject("Error: Something went wrong");
    }
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username;
    })
    .then((username) => {
        console.log(username); 
    })
    .catch((e) => {
        console.log(e);
    })
    .finally((e)=> console.log("The promise either resolve or reject"))
    

    async function getAllUsers(){
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')

            const data = await response.json()
            console.log(data)
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    getAllUsers()


/*
     Note ==>
        1) Don't forget to attach resolve with promise otherwise then method will not work 
*/ 