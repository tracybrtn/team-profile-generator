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

//inquirer prompts
const managerQuestionsArr = [
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the manager's office number",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log('Please enter office number of manager!');
                return false;
            }
        }
    }
]

module.exports = { Manager, managerQuestionsArr };