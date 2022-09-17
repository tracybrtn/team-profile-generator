//import parent class Employee
const { Employee } = require("./Employee");

class Intern extends Employee {
}

const internQuestionArr = [
    {
        type: 'input',
        name: 'school',
        message:"Enter intern's school"
            //validate
    }
]

module.exports = { Intern, internQuestionArr};