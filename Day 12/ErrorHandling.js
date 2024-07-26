// 1) Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function throwError(){
    throw new Error('This is an intentional error')
}

try {
   // Attempt to execute the function that throws an error
   throwError() 
} catch (error) {
    //Handle an error
    console.log("An error occurred:", error.message);
}

// 2 ) Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function division(numerator,denominator){
    if(denominator === 0){
        throw new Error("Division by zero is not allowed.");
    }

    return numerator / denominator
}

try {
    const result = division(10,0)
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}

// 3) Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function riskyOperation() {
    console.log("Inside the riskyOperation function.");
    // Intentionally throw an error
    throw new Error("Something went wrong!");
  }
  
  try {
    console.log("Entering try block.");
    riskyOperation(); // This will throw an error
    console.log("This message won't be logged because an error occurred.");
  } catch (error) {
    console.log("Entering catch block.");
    console.log("Caught an error:", error.message);
  } finally {
    console.log("Entering finally block.");
    console.log("This code runs regardless of whether an error occurred or not.");
  }
  
  console.log("Script execution continues...");
  