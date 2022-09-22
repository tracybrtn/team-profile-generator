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

    getRole() {
        return 'Intern';
    }
}

//inquirer prompts
const internQuestionsArr = [
    {
        type: 'input',
        name: 'school',
        message:"Enter intern's school",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter school of intern!');
                return false;
            }
        }
    }
]

module.exports = { Intern, internQuestionsArr};