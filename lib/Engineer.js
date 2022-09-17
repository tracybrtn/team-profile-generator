//import parent class Employee
const { Employee } = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole(){
        return 'Engineer';
    }
}

const engineerQuestionsArr = [
    {
        type: 'input',
        name: 'github',
        message:"Engineer's github username"
            //validate
    }
]
    

module.exports = { Engineer, engineerQuestionsArr};