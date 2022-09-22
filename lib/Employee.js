// Defines what will be the parent class: employee
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

//inquirer prompts
const employeeQuestionsArr = [
    {
        type: 'input',
        name: 'name',
        message: "Enter team member's name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter name of team member!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter team member's ID",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter ID of employee!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter team member's email",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter email of employee!');
                return false;
            }
        }
    },
]

const addEmployeeQuestions = [
    {
        type: 'list',
        name: 'role',
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "No more team members are needed."]
    }
]
module.exports = { Employee, employeeQuestionsArr, addEmployeeQuestions };