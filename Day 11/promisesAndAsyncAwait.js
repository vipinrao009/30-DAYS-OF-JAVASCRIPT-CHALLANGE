// Task 1

new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
    },2000)
}).then(function(){
    console.log('Promise is consumed')
})

// Task 2
new Promise(function(resolve,reject){
    setTimeout(function(){
        reject(new Error("Operation timed out after 2 seconds."));
    },200)
}).catch((error)=>{
    console.log("Caught an error:", error.message);
})

// Task 3
const promiseFour = new Promise(function(resolve, reject) {
    resolve({ username: "xyz123", password: "1111",set:{ name:'xyz',age:'18'} });
});

promiseFour
    .then((user) => {
        console.log(user);
        return user;
    })
    .then((user) => {
        console.log(user.username); 
        return user.set
    })
    .then((set)=>{
        console.log(set.name)
    })

    // Task 4
    async function logResolvedValue(promise) {
        try {
          const result = await promise;
          console.log('Resolved value:', result);
        } catch (error) {
          console.error('Promise rejected with error:', error);
        }
      }
      
    // Example usage:
    const successfulPromise = Promise.resolve('Success!');
    logResolvedValue(successfulPromise);
    
// Task 5
async function logRejectedValue(promise) {
    try {
      const result = await promise;
      console.log('Resolved value:', result);
    } catch (error) {
      console.error('Error message:', error.message);
    }
  }
  
// Example usage:
  const failedPromise = Promise.reject(new Error('Something went wrong!'));
  logRejectedValue(failedPromise);
  
//   TAsk 6
function getData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
        if(!response.ok){
            throw new error('Network response was not ok' + response.statusText)
        }

        return response.json();
    })
    .then(data=>{
        console.log(data)
    })
    .catch(error =>{
        console.error('There has been a problem with your fetch operation:', error)
    })
}

// getData()

// Task 7

async function getData(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')

        if(!res.ok){
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await res.json()
        console.log(data)
    } catch (error) {
        
    }
}

// getData()

// Task 8

const function1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            // resolve("Data from function 1")
            const data = [1,2,3]
            resolve(data)
        })
    })
}

const function2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            // resolve("Data from function 2")
            const data = [6,7,8]
            resolve(data)
        })
    })
}

const function3 =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            // resolve("Data from function 3")
            const data = [7,8,9]
            resolve(data)
        })
    })
}

Promise.all([function1(),function2(),function3()])
.then(dataArray =>{
    console.log(dataArray)
})

// Task 9

const race1 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("This is the race 1")
        }, 1000);
    })
}

const race2 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("This is the race 2")
        }, 500);
    })
}

Promise.race([race1(),race2()])
.then(result =>{
    console.log("Result :", result)
})
.catch(reject =>{
    console.log("Error :",reject)
})

