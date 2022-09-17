//import parent class Employee
const { Employee } = require("./Employee");

class Engineer extends Employee {
    }


const engineerQuestionArr = [
    {
        type: 'input',
        name: 'github',
        message:"Engineer's github username"
            //validate
    }
    
]

module.exports = { Engineer, engineerQuestionArr};