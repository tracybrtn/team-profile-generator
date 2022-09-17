//import parent class Employee
const { Employee } = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager';
    }
}

const managerQuestionsArr = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the manager's office number"
         //validate
    }
]

module.exports = { Manager, managerQuestionsArr };