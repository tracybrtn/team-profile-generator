//import parent class Employee
const { Employee } = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole(){
        return 'Intern';
    }
}

const internQuestionsArr = [
    {
        type: 'input',
        name: 'school',
        message:"Enter intern's school"
            //validate
    }
]

module.exports = { Intern, internQuestionsArr};