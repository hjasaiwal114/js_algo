class Student extends Person {
    constructor(firstname, lastName, StudentId) {
        super(firstname, lastname);
        this.studentId = studentId;
    }
    displayStudentInfo() {
        console.log(`STudent Id: ${this.studentId}`);
    }
}

const student = new Student('Alice', 'Smith', '12345');
student.sayHello();
student.displayStudentInfo();