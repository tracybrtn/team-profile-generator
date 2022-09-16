// Defines what will be the parent class: employee
class Employee {
    constructor(name, id, email, role) {
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
        return this.role;
    }
}

const employeeQuestionsArr = [
    {
        type: 'input',
        name: 'name',
        message: "Enter team member's name",
        //validate
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter team member's ID",
        //validate
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter team member's email",
        //validate
    },
]

const addEmployeeArr = [
    {
        type: 'list',
        name: 'role',
        message: "Would you like to add another team member?",
        choices: ["Engineer", "Intern", "No more team members are needed."]
         //validate
    }
]
module.exports = { Employee, employeeQuestionsArr, addEmployeeArr };