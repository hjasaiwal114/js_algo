const person = {
    firstName: 'Himanshu',
    lastName: 'Jasaiwal',
    hanji: function() {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }
};

person.sayHello();