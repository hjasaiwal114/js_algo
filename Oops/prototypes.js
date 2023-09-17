function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log(`Hello my name is ${this.name}.`);
};

const Himanshu = new Person('Himanshu');
Himanshu.sayHello();