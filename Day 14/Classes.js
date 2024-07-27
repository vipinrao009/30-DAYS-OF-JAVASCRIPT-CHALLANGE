// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message. 
class Person{

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hello I am ${this.name} and I am ${this.age} year old`)
    }

    updateAge(newAge){
        this.age = newAge
        console.log(`Now my age is uodated to ${this.age}`)
    }

    
    static custom(){
        console.log("This is satatic functon");

    }



}

const p = new Person("vipin",20)
p.greet();

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.

p.updateAge(12)

// Task 3: Define a class Student that extends the Person class. Add a property student Id and a method to return the student ID. Create an instance of the student class and log the student ID


class Student extends Person {

    static studentCount = 0;

    constructor(name,age,studentId){
        super(name,age);
        this.studentId = studentId
        Student.studentCount += 1;
    }

    //Method
    getStudentId(){
        return this.studentId
    }

    greet(){
        return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }

    static getStudentCount(){
        return `Total student are ${this.studentCount}`
    }

}

const student = new Student('xyz',30,12)
console.log(student.getStudentId())

//Task 4: Override the greeting method in the student class to include the student ID in the message. Log the overridden greeting message.

console.log(student.greet())

// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

Person.custom()

//Task 6: Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

const totalStudent = new Student("ABC",30,21)
console.log(totalStudent)
console.log(Student.getStudentCount())

//Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastlame property). Create an instance and log the full name using the getter.

class Person1{
    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(newFullName){
        const [newFirstName, newLastName] = newFullName.split(' ');
        this.firstName = newFirstName;
        this.lastName = newLastName
    }
}

const person = new Person1('Vipin','Kumar',20)
console.log(person.fullName)

// Task 8: Add a setter method to the Person class to update the name properties (firsthame and lasttiame). Update the name using the setter and log the updated full name.

person.fullName = 'Kalu Kumar'
console.log(person.fullName)

// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
    // Private field for balance
    #balance;

    constructor(initialBalance) {
        if (initialBalance < 0) {
            throw new Error('Initial balance cannot be negative');
        }
        this.#balance = initialBalance;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be positive');
        }
        this.#balance += amount;
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be positive');
        }
        if (amount > this.#balance) {
            throw new Error('Insufficient funds');
        }
        this.#balance -= amount;
    }

    // Method to get the balance
    getBalance() {
        return this.#balance;
    }
}

// Example usage
const myAccount = new Account(1000);

console.log(myAccount.getBalance()); // Outputs: 1000

myAccount.deposit(500);
console.log(myAccount.getBalance()); // Outputs: 1500

try {
    myAccount.withdraw(2000); // Should throw an error
} catch (e) {
    console.log(e.message); // Outputs: Insufficient funds
}

myAccount.withdraw(300);
console.log(myAccount.getBalance()); // Outputs: 1200


// 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.

myAccount.withdraw(30);
console.log("Balance after withdrawing 30:", myAccount.getBalance()); // Outputs: 120

try {
    myAccount.withdraw(1200);
} catch (error) {
    console.log("Error:", error.message); // Outputs: Insufficient funds
}

console.log("Final balance:", myAccount.getBalance());