class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.firstname}, ${this.lastName}.`);
    }
}

const Person = new Person('Himanshu', 'Jasaiwlax')